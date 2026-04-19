import { z } from "zod";

const SESSION_COOKIE_NAME = "session";
const LEGACY_SESSION_COOKIE_NAME = "__Host-session";
const CSRF_COOKIE_NAME = "csrf-token";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;
const PASSWORD_ITERATIONS = 50000;

const registerSchema = z.object({
  email: z.string().email().max(254),
  username: z
    .string()
    .min(3)
    .max(32)
    .regex(/^[^\x00-\x1F\x7F]+$/, "Username contains unsupported characters."),
  displayName: z.string().min(1).max(80),
  password: z
    .string()
    .min(8)
    .max(128)
    .regex(/^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).+$/, "Password must include at least one uppercase letter and one special character."),
});

const loginSchema = z.object({
  emailOrUsername: z.string().min(3).max(254),
  password: z.string().min(8).max(128),
});

const supportSchema = z.object({
  topic: z.string().trim().min(3).max(120),
  message: z.string().trim().min(10).max(3000),
});

const querySchema = z.object({
  mode: z.enum(["cookie", "token"]).optional(),
});

function securityHeaders() {
  return {
    "x-content-type-options": "nosniff",
    "x-frame-options": "DENY",
    "referrer-policy": "strict-origin-when-cross-origin",
    "permissions-policy": "camera=(), microphone=(), geolocation=()",
    "cross-origin-resource-policy": "same-site",
  };
}

function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      ...securityHeaders(),
      ...extraHeaders,
    },
  });
}

function jsonWithCookies(data, status, extraHeaders, cookies) {
  const response = json(data, status, extraHeaders);
  const list = Array.isArray(cookies) ? cookies : [];
  for (const cookie of list) {
    response.headers.append("set-cookie", cookie);
  }
  return response;
}

function corsHeaders(origin, env) {
  const allowedOrigin = env.ALLOWED_ORIGIN;
  const isDevLocalhost = env.ENVIRONMENT !== "production" && typeof origin === "string" && /^http:\/\/localhost:\d+$/.test(origin);
  const allowOrigin = isDevLocalhost
    ? origin
    : allowedOrigin && origin === allowedOrigin
      ? allowedOrigin
      : "null";

  return {
    "access-control-allow-origin": allowOrigin,
    "access-control-allow-credentials": "true",
    "access-control-allow-methods": "GET,POST,OPTIONS",
    "access-control-allow-headers": "content-type,authorization,x-csrf-token",
    "access-control-max-age": "86400",
    vary: "Origin",
  };
}

function methodNotAllowed(cors) {
  return json({ error: "Method not allowed" }, 405, cors);
}

function badRequest(message, cors) {
  return json({ error: message }, 400, cors);
}

function unauthorized(cors) {
  return json({ error: "Unauthorized" }, 401, { ...cors, "www-authenticate": "Bearer" });
}

function tooManyRequests(cors) {
  return json({ error: "Too many requests. Please try again later." }, 429, cors);
}

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

function normalizeUsername(username) {
  return username.trim().toLowerCase();
}

function normalizeDisplayName(displayName) {
  return displayName
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[\x00-\x1F\x7F]/g, "")
    .slice(0, 80);
}

function getIp(request) {
  const candidate = request.headers.get("CF-Connecting-IP") || "";
  return candidate.slice(0, 64);
}

function parseCookies(request) {
  const header = request.headers.get("cookie") || "";
  return header.split(";").reduce((acc, part) => {
    const [rawKey, ...rest] = part.trim().split("=");
    if (!rawKey) return acc;
    acc[rawKey] = decodeURIComponent(rest.join("="));
    return acc;
  }, {});
}

function cookieString(name, value, { maxAge, httpOnly = true, secure = true, sameSite = "Lax", path = "/" } = {}) {
  const parts = [`${name}=${encodeURIComponent(value)}`, `Path=${path}`, `SameSite=${sameSite}`];
  if (typeof maxAge === "number") parts.push(`Max-Age=${maxAge}`);
  if (httpOnly) parts.push("HttpOnly");
  if (secure) parts.push("Secure");
  return parts.join("; ");
}

async function parseJsonBody(request) {
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    throw new Error("Content-Type must be application/json.");
  }

  return request.json();
}

function toBase64Url(bytes) {
  const str = btoa(String.fromCharCode(...bytes));
  return str.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function randomToken(byteLength = 32) {
  const bytes = new Uint8Array(byteLength);
  crypto.getRandomValues(bytes);
  return toBase64Url(bytes);
}

async function sha256(text) {
  const encoded = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", encoded);
  return toBase64Url(new Uint8Array(digest));
}

async function hashPassword(password, saltBase64Url) {
  try {
    const passwordKey = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(password),
      "PBKDF2",
      false,
      ["deriveBits"]
    );

    let salt;
    if (saltBase64Url) {
      const decoded = atob(saltBase64Url.replace(/-/g, "+").replace(/_/g, "/"));
      salt = Uint8Array.from(decoded, (c) => c.charCodeAt(0));
    } else {
      salt = crypto.getRandomValues(new Uint8Array(16));
    }

    const bits = await crypto.subtle.deriveBits(
      {
        name: "PBKDF2",
        hash: "SHA-256",
        iterations: PASSWORD_ITERATIONS,
        salt,
      },
      passwordKey,
      256
    );

    const hash = toBase64Url(new Uint8Array(bits));
    const saltValue = saltBase64Url || toBase64Url(salt);
    return `pbkdf2_sha256$${PASSWORD_ITERATIONS}$${saltValue}$${hash}`;
  } catch (error) {
    console.error("Hash error:", error instanceof Error ? error.message : String(error));
    throw error;
  }
}

async function verifyPassword(password, stored) {
  const parts = stored.split("$");
  if (parts.length !== 4 || parts[0] !== "pbkdf2_sha256") return false;
  const [, iterations, salt, expectedHash] = parts;
  if (Number(iterations) !== PASSWORD_ITERATIONS) return false;

  const candidate = await hashPassword(password, salt);
  const candidateHash = candidate.split("$")[3] || "";
  return timingSafeEqual(candidateHash, expectedHash);
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function checkRateLimit(env, rateKey, limit, windowSeconds) {
  const now = Math.floor(Date.now() / 1000);

  const existing = await env.REGULATE_DB.prepare(
    "SELECT count, window_start FROM auth_rate_limits WHERE rate_key = ? LIMIT 1"
  )
    .bind(rateKey)
    .first();

  if (!existing || now - Number(existing.window_start) >= windowSeconds) {
    await env.REGULATE_DB.prepare(
      "INSERT INTO auth_rate_limits (rate_key, count, window_start, updated_at) VALUES (?, 1, ?, ?) ON CONFLICT(rate_key) DO UPDATE SET count = 1, window_start = excluded.window_start, updated_at = excluded.updated_at"
    )
      .bind(rateKey, now, now)
      .run();
    return true;
  }

  if (Number(existing.count) >= limit) return false;

  await env.REGULATE_DB.prepare("UPDATE auth_rate_limits SET count = count + 1, updated_at = ? WHERE rate_key = ?")
    .bind(now, rateKey)
    .run();

  return true;
}

async function createSession(env, userId, request) {
  const token = randomToken(32);
  const tokenHash = await sha256(token);
  const now = Math.floor(Date.now() / 1000);
  const expiresAt = now + SESSION_TTL_SECONDS;
  const userAgent = (request.headers.get("user-agent") || "").slice(0, 255);
  const ipAddress = getIp(request);

  await env.REGULATE_DB.prepare(
    "INSERT INTO auth_sessions (user_id, session_token_hash, expires_at, created_at, last_seen_at, ip_address, user_agent) VALUES (?, ?, ?, ?, ?, ?, ?)"
  )
    .bind(userId, tokenHash, expiresAt, now, now, ipAddress, userAgent)
    .run();

  return { token, expiresAt };
}

async function getSessionFromRequest(request, env) {
  const authHeader = request.headers.get("authorization") || "";
  const cookies = parseCookies(request);
  const bearerToken = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";
  const cookieToken = cookies[SESSION_COOKIE_NAME] || cookies[LEGACY_SESSION_COOKIE_NAME] || "";
  const token = bearerToken || cookieToken;

  if (!token) return null;

  const tokenHash = await sha256(token);
  const now = Math.floor(Date.now() / 1000);

  const row = await env.REGULATE_DB.prepare(
    "SELECT s.id AS session_id, s.user_id, s.expires_at, u.email, u.username, u.display_name, u.role FROM auth_sessions s JOIN auth_users u ON u.id = s.user_id WHERE s.session_token_hash = ? LIMIT 1"
  )
    .bind(tokenHash)
    .first();

  if (!row) return null;

  if (Number(row.expires_at) <= now) {
    await env.REGULATE_DB.prepare("DELETE FROM auth_sessions WHERE id = ?").bind(row.session_id).run();
    return null;
  }

  await env.REGULATE_DB.prepare("UPDATE auth_sessions SET last_seen_at = ? WHERE id = ?").bind(now, row.session_id).run();

  return {
    sessionId: row.session_id,
    userId: row.user_id,
    email: row.email,
    username: row.username,
    displayName: row.display_name,
    role: row.role,
    expiresAt: row.expires_at,
    token,
    cookies,
  };
}

function validateCsrf(request, cookies) {
  const csrfCookie = cookies[CSRF_COOKIE_NAME] || "";
  const csrfHeader = request.headers.get("x-csrf-token") || "";
  return csrfCookie.length > 10 && csrfHeader.length > 10 && timingSafeEqual(csrfCookie, csrfHeader);
}

function publicUser(user) {
  return {
    id: user.userId || user.id,
    email: user.email,
    username: user.username,
    displayName: user.displayName || user.display_name,
    role: user.role,
  };
}

async function sendContactEmail({ name, email, message }, env) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Contact Form <noreply@regulate2learn.com>",
      to: ["you@regulate2learn.com"], // 👈 replace with your Zoho email
      reply_to: email,
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    }),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Resend error: ${error}`);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("origin");
    const cors = corsHeaders(origin, env);
    const isProduction = env.ENVIRONMENT === "production";

    try {
      if (request.method === "OPTIONS") {
        return new Response(null, { status: 204, headers: cors });
      }

      if (url.pathname === "/") {
        return json(
          {
            ok: true,
            service: "Regulate2learn™ API",
            health: "/api/health",
            auth: ["/api/auth/register", "/api/auth/login", "/api/auth/logout", "/api/auth/session"],
          },
          200,
          cors
        );
      }

      if (url.pathname === "/api/health" && request.method === "GET") {
        return json({ ok: true, environment: env.ENVIRONMENT || "unknown" }, 200, cors);
      }

      if (url.pathname === "/api/auth/register") {
        if (request.method !== "POST") return methodNotAllowed(cors);

        const ip = getIp(request);
        if (!isProduction) {
          // Keep development friction low while preserving throttling in production.
        } else {
          const canProceed = await checkRateLimit(env, `register:${ip}`, 8, 15 * 60);
          if (!canProceed) return tooManyRequests(cors);
        }

        const body = registerSchema.parse(await parseJsonBody(request));
        const query = querySchema.parse(Object.fromEntries(url.searchParams.entries()));

        const email = normalizeEmail(body.email);
        const username = normalizeUsername(body.username);
        const displayName = normalizeDisplayName(body.displayName);
        let passwordHash;
        try {
          passwordHash = await hashPassword(body.password);
        } catch {
          console.log(JSON.stringify({ event: "auth_register_hash_failed", ip }));
          return json({ error: "Registration is temporarily unavailable. Please try again." }, 503, cors);
        }

        const now = new Date().toISOString();
        let userId;

        try {
          const inserted = await env.REGULATE_DB.prepare(
            "INSERT INTO auth_users (email, username, display_name, password_hash, role, created_at, updated_at) VALUES (?, ?, ?, ?, 'user', ?, ?)"
          )
            .bind(email, username, displayName, passwordHash, now, now)
            .run();
          userId = inserted.meta.last_row_id;
        } catch {
          return badRequest("Account could not be created with the provided details.", cors);
        }

        const session = await createSession(env, userId, request);
        const csrfToken = randomToken(24);
        const secureCookie = isProduction;

        console.log(JSON.stringify({ event: "auth_register_success", userId, ip }));

        if ((query.mode || "cookie") === "token") {
          return json(
            {
              user: { id: userId, email, username, displayName, role: "user" },
              accessToken: session.token,
              expiresAt: session.expiresAt,
            },
            201,
            cors
          );
        }

        return jsonWithCookies(
          {
            user: { id: userId, email, username, displayName, role: "user" },
            expiresAt: session.expiresAt,
            csrfToken,
          },
          201,
          cors,
          [
            cookieString(SESSION_COOKIE_NAME, session.token, {
              maxAge: SESSION_TTL_SECONDS,
              secure: secureCookie,
              httpOnly: true,
            }),
            cookieString(CSRF_COOKIE_NAME, csrfToken, {
              maxAge: SESSION_TTL_SECONDS,
              secure: secureCookie,
              httpOnly: false,
            }),
          ]
        );
      }

      if (url.pathname === "/api/auth/login") {
        if (request.method !== "POST") return methodNotAllowed(cors);

        const ip = getIp(request);
        if (!isProduction) {
          // Keep development friction low while preserving throttling in production.
        } else {
          const canProceed = await checkRateLimit(env, `login:${ip}`, 15, 15 * 60);
          if (!canProceed) return tooManyRequests(cors);
        }

        const body = loginSchema.parse(await parseJsonBody(request));
        const query = querySchema.parse(Object.fromEntries(url.searchParams.entries()));
        const candidate = body.emailOrUsername.trim();

        const email = normalizeEmail(candidate);
        const username = normalizeUsername(candidate);

        const user = await env.REGULATE_DB.prepare(
          "SELECT id, email, username, display_name, password_hash, role FROM auth_users WHERE email = ? OR username = ? LIMIT 1"
        )
          .bind(email, username)
          .first();

        const invalidError = json({ error: "Invalid credentials." }, 401, cors);
        if (!user) {
          console.log(JSON.stringify({ event: "auth_login_failed", ip }));
          return invalidError;
        }

        const isPasswordValid = await verifyPassword(body.password, user.password_hash);
        if (!isPasswordValid) {
          console.log(JSON.stringify({ event: "auth_login_failed", userId: user.id, ip }));
          return invalidError;
        }

        const session = await createSession(env, user.id, request);
        const csrfToken = randomToken(24);
        const secureCookie = isProduction;

        console.log(JSON.stringify({ event: "auth_login_success", userId: user.id, ip }));

        if ((query.mode || "cookie") === "token") {
          return json(
            {
              user: publicUser(user),
              accessToken: session.token,
              expiresAt: session.expiresAt,
            },
            200,
            cors
          );
        }

        return jsonWithCookies(
          {
            user: publicUser(user),
            expiresAt: session.expiresAt,
            csrfToken,
          },
          200,
          cors,
          [
            cookieString(SESSION_COOKIE_NAME, session.token, {
              maxAge: SESSION_TTL_SECONDS,
              secure: secureCookie,
              httpOnly: true,
            }),
            cookieString(CSRF_COOKIE_NAME, csrfToken, {
              maxAge: SESSION_TTL_SECONDS,
              secure: secureCookie,
              httpOnly: false,
            }),
          ]
        );
      }

      if (url.pathname === "/api/auth/session") {
        if (request.method !== "GET") return methodNotAllowed(cors);

        const session = await getSessionFromRequest(request, env);
        if (!session) return unauthorized(cors);

        return json(
          {
            authenticated: true,
            user: publicUser(session),
            expiresAt: session.expiresAt,
          },
          200,
          cors
        );
      }

      if (url.pathname === "/api/auth/logout") {
        if (request.method !== "POST") return methodNotAllowed(cors);

        const session = await getSessionFromRequest(request, env);
        if (!session) return unauthorized(cors);

        if (!validateCsrf(request, session.cookies)) {
          return badRequest("Invalid CSRF token.", cors);
        }

        const tokenHash = await sha256(session.token);
        await env.REGULATE_DB.prepare("DELETE FROM auth_sessions WHERE session_token_hash = ?")
          .bind(tokenHash)
          .run();

        const secureCookie = isProduction;
        return jsonWithCookies(
          { status: "logged_out" },
          200,
          cors,
          [
            cookieString(SESSION_COOKIE_NAME, "", {
              maxAge: 0,
              secure: secureCookie,
              httpOnly: true,
            }),
            cookieString(CSRF_COOKIE_NAME, "", {
              maxAge: 0,
              secure: secureCookie,
              httpOnly: false,
            }),
          ]
        );
      }

      if (url.pathname === "/api/support-requests") {
        const session = await getSessionFromRequest(request, env);
        if (!session) return unauthorized(cors);

        if (request.method === "GET") {
          const limit = Number(url.searchParams.get("limit") || "50");
          const safeLimit = Number.isFinite(limit) ? Math.max(1, Math.min(100, Math.floor(limit))) : 50;

          const result = await env.REGULATE_DB.prepare(
            "SELECT id, user_id, topic, message, status, created_at FROM support_requests ORDER BY id DESC LIMIT ?"
          )
            .bind(safeLimit)
            .all();

          return json({ items: result.results || [] }, 200, cors);
        }

        if (request.method === "POST") {
          if (!validateCsrf(request, parseCookies(request))) {
            return badRequest("Invalid CSRF token.", cors);
          }

          const body = supportSchema.parse(await parseJsonBody(request));

          const insert = await env.REGULATE_DB.prepare(
            "INSERT INTO support_requests (user_id, topic, message) VALUES (?, ?, ?)"
          )
            .bind(session.userId, body.topic.trim(), body.message.trim())
            .run();

          return json({ id: insert.meta.last_row_id, status: "created" }, 201, cors);
        }

        return methodNotAllowed(cors);
      }

      if (url.pathname === "/api/contact") {
        if (request.method !== "POST") return methodNotAllowed(cors);
        // Basic anti-spam: rate limit by IP
        const ip = getIp(request);
        const canProceed = await checkRateLimit(env, `contact:${ip}`, 3, 60 * 10); // 3 per 10 min
        if (!canProceed) return tooManyRequests(cors);
        // Parse and validate body
        let body;
        try {
          body = await parseJsonBody(request);
        } catch {
          return badRequest("Invalid JSON.", cors);
        }
        const name = (body.name || "").trim().slice(0, 80);
        const email = (body.email || "").trim().toLowerCase().slice(0, 120);
        const message = (body.message || "").trim().slice(0, 2000);
        if (!name || !email || !message) return badRequest("All fields are required.", cors);
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return badRequest("Invalid email.", cors);
        // Simple spam keyword filter
        const spamWords = ["viagra", "casino", "loan", "bitcoin", "sex", "porn", "escort", "cialis", "pharmacy", "crypto", "nude"];
        if (spamWords.some(w => message.toLowerCase().includes(w))) return badRequest("Message flagged as spam.", cors);
        // Send email via Mailgun
        try {
          await sendContactEmail({ name, email, message }, env);
        } catch (e) {
          return json({ error: "Failed to send email." }, 500, cors);
        }
        return json({ ok: true, message: "Message sent." }, 200, cors);
      }

      return json({ error: "Not found" }, 404, cors);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const first = error.issues[0];
        return badRequest(first?.message || "Invalid request data.", cors);
      }

      console.log(JSON.stringify({ event: "server_error", path: url.pathname }));
      if (isProduction) {
        return json({ error: "Internal error" }, 500, cors);
      }

      return json(
        {
          error: "Internal error",
          message: error instanceof Error ? error.message : "Unknown error",
        },
        500,
        cors
      );
    }
  },
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

function getCookie(name) {
  const cookies = document.cookie ? document.cookie.split(";") : [];
  for (const cookie of cookies) {
    const [rawName, ...rest] = cookie.trim().split("=");
    if (rawName === name) return decodeURIComponent(rest.join("="));
  }
  return "";
}

async function request(path, options = {}) {
  const method = (options.method || "GET").toUpperCase();
  const csrfToken = method === "GET" ? "" : getCookie("csrf-token");

  const response = await fetch(`${API_BASE_URL}${path}`, {
    credentials: "include",
    headers: {
      "content-type": "application/json",
      ...(csrfToken ? { "x-csrf-token": csrfToken } : {}),
      ...(options.headers || {}),
    },
    ...options,
  });

  const isJson = response.headers.get("content-type")?.includes("application/json");
  const payload = isJson ? await response.json() : null;

  if (!response.ok) {
    const message = payload?.error || payload?.message || "Request failed";
    throw new Error(message);
  }

  return payload;
}

export function createSupportRequest(data) {
  return request("/api/support-requests", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function getHealth() {
  return request("/api/health", { method: "GET" });
}

export function registerUser(data) {
  return request("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function loginUser(data) {
  return request("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function logoutUser() {
  return request("/api/auth/logout", {
    method: "POST",
    body: JSON.stringify({}),
  });
}

export function getSession() {
  return request("/api/auth/session", {
    method: "GET",
  });
}

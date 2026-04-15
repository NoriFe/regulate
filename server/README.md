# Server: Cloudflare Worker + D1

This backend is designed for Cloudflare deployment with a managed D1 database.

## Why this setup

- D1 is managed serverless SQL with SQLite semantics on Free and Paid plans.
- Works directly with Workers, so no DB server management.
- Secure defaults: secrets, auth check, input validation, and parameterized SQL.

## Files

- `src/worker.js`: API endpoints.
- `migrations/0001_init.sql`: initial schema.
- `wrangler.toml`: Worker and D1 binding config.
- `.dev.vars.example`: local secret template.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create D1 database:

```bash
npm run db:create
```

3. Copy returned `database_id` into `wrangler.toml` (`database_id = "..."`).

4. Apply schema locally:

```bash
npm run db:migrate:local
```

5. Set local secrets:

- Copy `.dev.vars.example` to `.dev.vars`.
- Put a strong `ADMIN_API_TOKEN` value.

6. Run local Worker:

```bash
npm run dev
```

## Production secrets

Use Cloudflare secrets, never code:

```bash
wrangler secret put ADMIN_API_TOKEN
```

## Endpoints

- `GET /api/health` public health check.
- `POST /api/support-requests` create support request.
- `GET /api/support-requests` admin-protected list, requires `Authorization: Bearer <ADMIN_API_TOKEN>`.

## Security checklist

- Never hardcode API keys or tokens.
- Keep secrets in Cloudflare Secrets.
- Validate all user input before queries.
- Use parameterized SQL (`.bind(...)`).
- Keep admin routes authenticated and minimal.
- Use separate dev and production environments.
- Back up D1 data regularly (scheduled export).
- If external access to D1 is needed, expose through an authenticated proxy Worker only.

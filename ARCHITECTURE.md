# RENTALL architecture

Next.js App Router + TypeScript frontend/full-stack routes; Supabase/Postgres/Auth as integration target; demo fallback for fast UX testing.

Core domain: profiles -> listings -> availability -> bookings -> payments -> reviews.

Future modules: owner listing editor, transactional booking locking, Storage uploads, Stripe Connect, email/SMS, maps, multilingual UI, AI discovery/outreach, Expo mobile app.

Do not expose service-role/secret keys in browser code. Before production, add authenticated role checks, strict RLS, rate limiting, audit logs, payment webhooks and concurrency-safe booking transactions.

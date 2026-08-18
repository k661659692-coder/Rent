# RENTALL MVP v1

Marketplace foundation for renting vehicles, equipment, bikes, campers, property and other physical goods.

## Included
- Search + category filtering
- Listing cards
- Hourly/daily pricing chosen by owner
- Owner opening/closing hours
- Owner buffer and daily grace period
- Availability conflict logic
- Booking request form
- Demo mode without external services
- Supabase/Postgres schema + RLS starter policies
- Owner/admin dashboard placeholders
- i18n-ready architecture

## Run
1. Node.js 20+
2. `cp .env.example .env.local`
3. Leave Supabase variables empty for demo mode
4. `npm install`
5. `npm run dev`
6. Open http://localhost:3000

## Supabase
Run `supabase/schema.sql` in the Supabase SQL editor, then set the public URL and publishable key. Keep service-role/secret keys server-side only.

## Not yet wired
Real payments/payouts, production authentication flows, image storage, email/SMS, maps, moderation, AI discovery/outreach, concurrency-safe booking transactions and mobile app. These are intentionally integration points, not fake production functionality.

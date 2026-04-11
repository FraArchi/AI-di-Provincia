# Architecture Research

## Component Boundaries
- **Public Face**: High-performance, SEO-optimized pages (Home, Article). Connects to Supabase public data.
- **Gated Face**: Protected routes accessible via Supabase Auth (or simple password mechanism). Contains affiliate links and deep-dive content.
- **Content Pipeline**: AI generation (Whisper/Claude) -> Human Editing -> Supabase DB insertion.

## Data Flow
1. User lands on Public Article (SEO traffic).
2. Public Article offers "exclusive deep dive" via newsletter signup.
3. User signs up, gets access to Gated Area.
4. Gated Area presents affiliate links and value ladder products.

## Build Order
1. Migrate/Upgrade current Vite SPA to support SSR/SSG (or robust pre-rendering) for SEO.
2. Implement dynamic Meta tags per article.
3. Build the Gated Area (`/riservato/`) with Supabase Auth or a simple gating mechanism.
4. Integrate newsletter signup form.

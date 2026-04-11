# AI di Provincia Requirements

## v1 Requirements

### SEO Optimization
- [ ] **SEO-01**: Implement Server-Side Rendering (SSR) or Static Site Generation (SSG) for the public blog to ensure Googlebot indexability.
- [ ] **SEO-02**: Dynamic Open Graph and Meta Tags for every article page.
- [ ] **SEO-03**: Core Web Vitals optimization (ensure Fast LCP/FID using Vite/React).

### Content Delivery
- [ ] **CONT-01**: Users can view the homepage with a featured article and a grid of recent articles.
- [ ] **CONT-02**: Users can read individual articles parsed from Markdown (`##` headers).
- [ ] **CONT-03**: Responsive, mobile-first reading experience with the "AI di Provincia" branding (Tailwind CSS, Playfair Display/Inter fonts).

### Monetization & Gated Content
- [ ] **GATE-01**: A hidden or password-protected `/riservato/` route for premium content.
- [ ] **GATE-02**: Newsletter signup integration (e.g., ConvertKit) required to access the `/riservato/` area.
- [ ] **GATE-03**: Gated articles containing affiliate links and "Value Ladder" product offerings.

### Administration
- [ ] **ADMIN-01**: Authors can insert new records into the Supabase `articles` table (via dashboard or simple admin UI).
- [ ] **ADMIN-02**: Support for a boolean `is_featured` flag to highlight articles.

## v2 Requirements (Deferred)
- **LANG-01**: Multi-language support via subdomains (`it.`, `es.`, etc.) for international SEO traffic.
- **VIDEO-01**: Video-to-Text pipeline integration (Whisper AI) to automatically generate articles from YouTube/Interviews.

## Out of Scope
- **Complex Custom CMS** — Using Supabase directly avoids backend maintenance overhead.
- **Display Ads (AdSense)** — Kept out of scope for early phases to maintain user trust and avoid UX degradation.

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| SEO-01      |       | Open   |
| SEO-02      |       | Open   |
| SEO-03      |       | Open   |
| CONT-01     |       | Open   |
| CONT-02     |       | Open   |
| CONT-03     |       | Open   |
| GATE-01     |       | Open   |
| GATE-02     |       | Open   |
| GATE-03     |       | Open   |
| ADMIN-01    |       | Open   |
| ADMIN-02    |       | Open   |

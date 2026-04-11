# AI di Provincia

## What This Is
AI di Provincia is a blog/content platform that explores Artificial Intelligence from the perspective of people living away from major tech hubs ("in provincia"). It is built as a React single-page application using Vite, Tailwind CSS, and Supabase for content management.

## Core Value
To provide an authentic, fast, and accessible platform for sharing insights about AI that resonate with a non-metropolitan audience.

## Requirements

### Validated
- ✓ [Frontend Architecture] — React 18, Vite, Tailwind CSS, Lucide icons
- ✓ [Backend Integration] — Supabase integration for articles with public read access
- ✓ [Routing] — Custom state-based routing for Home, Article, and About pages
- ✓ [Content Display] — Markdown-style content parsing with a responsive, mobile-first design

### Active
- [ ] Implement an SEO-optimized architecture as per the "Faraone con sterzo da strada" strategy (multi-language subdomains, private gated area).
- [ ] Improve content production pipeline (incorporate Whisper AI transcriptions from the interviews in the workspace).
- [ ] Integrate a newsletter system to gate premium content.

### Out of Scope
- [Custom Backend] — Using Supabase to minimize maintenance overhead.
- [Complex Auth] — Public read-only access is sufficient for the public face of the blog.

## Context
The project operates in a highly competitive SEO environment. Based on the strategic research (`Strategie-varie.md`), the goal is to shift from a simple React SPA to a robust, hybrid SEO structure that combines a clean public face with an aggressive monetization backend (e.g., gated newsletter content, value ladders, programmatic SEO for tables/lists). The workspace also contains transcripts of an interview (`Intervista-Mamma-AI-di-Prov`) that can serve as seed content.

## Constraints
- **Tech Stack**: Must stick to the current React + Supabase stack, but may need SEO optimization (SSR/SSG or static generation) since it's currently a client-side SPA.
- **Budget**: Low budget (<40€/month) utilizing free tiers where possible.
- **Maintenance**: Must be easy to maintain with minimal manual coding for new articles.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Use Supabase for DB | Avoids custom backend maintenance, provides easy API. | ✓ Good |
| Client-side routing | Simplifies initial build, though SEO might require revisiting this (e.g. migrating to Next.js or Astro later). | — Pending |
| Adopt "Hybrid SEO" strategy | Maximizes traffic and longevity without high risk of Google penalties. | — Pending |

---
*Last updated: 11 aprile 2026 after initialization*

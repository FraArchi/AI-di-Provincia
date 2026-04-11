# Stack Research

## Core Technologies
- **React 18 & TypeScript**: For robust frontend development. (Existing)
- **Vite**: Fast bundling. (Existing)
- **Tailwind CSS**: Rapid UI styling. (Existing)
- **Supabase**: Backend-as-a-Service for PostgreSQL and Authentication. (Existing)

## SEO Hybrid Stack Additions
- **SSG / SSR Integration**: (e.g. Next.js or React Router with SSG) React SPA is bad for SEO. Migrating the public face to a static site generator is crucial for indexability.
- **Newsletter/Email Marketing**: ConvertKit (free tier) for the gated content access.
- **MemberPress / Custom Supabase Auth**: For the gated `/riservato/` area.

## Rationale
The "Faraone" strategy relies heavily on Google indexing the public face of the site and driving traffic to a private area. The current SPA approach via Vite is suboptimal for Googlebot without SSR/SSG.

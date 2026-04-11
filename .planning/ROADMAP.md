# Roadmap

## 1. Foundation & SEO Migration
**Goal**: Migrate current SPA to SSG/SSR for SEO indexability, retaining responsive design.
**Requirements**: SEO-01, SEO-02, SEO-03, CONT-01, CONT-02, CONT-03

**Success Criteria**:
- [ ] Homepage and Articles are served as static HTML or Server-Side Rendered (Googlebot can read content).
- [ ] Open Graph tags reflect article content correctly.
- [ ] Core Web Vitals show "Good" for LCP and CLS on mobile.

## 2. Gated Area & Monetization
**Goal**: Implement the hidden "Faraone" value ladder behind a newsletter wall.
**Requirements**: GATE-01, GATE-02, GATE-03

**Success Criteria**:
- [ ] Users trying to access `/riservato/` are prompted to enter an email via ConvertKit.
- [ ] Gated articles are successfully hidden from public access.
- [ ] Affiliate links are visible only inside the gated area.

## 3. Administration & Polish
**Goal**: Allow easy content creation without maintaining a complex custom CMS.
**Requirements**: ADMIN-01, ADMIN-02

**Success Criteria**:
- [ ] Authors can add articles directly to Supabase.
- [ ] `is_featured` boolean correctly highlights the article on the homepage.

# Newsletter Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate the Newsletter section into the global layout and add a navigation link with smooth scroll functionality.

**Architecture:** Move common components (NewsletterSection and Footer) from individual pages to the global `Layout.astro`. Update `Header.tsx` to include a newsletter link that handles smooth scrolling within the single-page context or across pages.

**Tech Stack:** Astro, React (TypeScript), Tailwind CSS.

---

### Task 1: Update Layout and Component Distribution

**Files:**
- Modify: `src/layouts/Layout.astro`
- Modify: `src/pages/index.astro`
- Modify: `src/pages/chi-sono.astro`
- Modify: `src/pages/post/[slug].astro`

- [ ] **Step 1: Add NewsletterSection and Footer to Layout.astro**

Update `src/layouts/Layout.astro` to import and include the components.

```astro
---
import '../styles/global.css';
import NewsletterSection from '../components/NewsletterSection.astro';
import Footer from '../components/Footer.astro';

interface Props {
  title: string;
  description?: string;
}
// ...
---
<!-- ... -->
  <body class="min-h-screen bg-white flex flex-col relative overflow-x-hidden">
    <slot />
    <NewsletterSection />
    <Footer />
  </body>
</html>
```

- [ ] **Step 2: Remove Footer from index.astro**

Remove the import and usage of `<Footer />` from `src/pages/index.astro`.

- [ ] **Step 3: Remove Footer from chi-sono.astro**

Remove the import and usage of `<Footer />` from `src/pages/chi-sono.astro`.

- [ ] **Step 4: Remove Footer from [slug].astro**

Remove the import and usage of `<Footer />` from `src/pages/post/[slug].astro`.

- [ ] **Step 5: Verify build**

Run: `npm run build`
Expected: Success.

- [ ] **Step 6: Commit changes**

```bash
git add src/layouts/Layout.astro src/pages/*.astro src/pages/post/*.astro
git commit -m "refactor: move footer and newsletter to global layout"
```

### Task 2: Add Newsletter Link to Navigation

**Files:**
- Modify: `src/components/Header.tsx`

- [ ] **Step 1: Add Newsletter link to Desktop Navigation**

Add the link to the desktop `<nav>` section.

```tsx
<a 
  href="#newsletter" 
  onClick={(e) => {
    e.preventDefault();
    document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' });
  }}
  className="text-sm font-bold text-accent hover:underline transition-colors"
>
  Newsletter ↓
</a>
```

- [ ] **Step 2: Add Newsletter link to Mobile Dropdown**

Add the link to the mobile dropdown menu.

```tsx
<a 
  href="#newsletter"
  onClick={(e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setTimeout(() => {
      document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }} 
  className="text-left px-5 py-3 text-sm font-bold text-accent hover:bg-gray-50 hover:underline transition-colors block border-t border-gray-100"
>
  Newsletter ↓
</a>
```

- [ ] **Step 3: Verify navigation**

Since I cannot test visually, I will ensure the code compiles and matches the requested style.

- [ ] **Step 4: Commit and Complete**

```bash
git add src/components/Header.tsx
git commit -m "feat: integrate newsletter section into layout and navigation"
```

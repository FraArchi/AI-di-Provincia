# Plan: Migrate Blog from Supabase to Local Markdown

## Objective
Migrate this React/Vite/TypeScript blog from Supabase to local Markdown files. Remove all Supabase dependencies. Articles should be stored as `.md` files in a `/posts` folder. Create a `lib/posts.ts` utility that reads and parses these files using Vite's `import.meta.glob`. Update `HomePage.tsx` and `ArticlePage.tsx` to use the new data source while keeping all existing UI unchanged.

## Tasks

### 1. Setup Markdown Infrastructure & Parsing Utility
- **Remove Supabase**: Uninstall `@supabase/supabase-js` from `package.json` and delete `src/lib/supabase.ts` (and any `supabase` folders at the project root).
- **Setup Dependencies**: Install a frontmatter parser (e.g., `front-matter` or `gray-matter`) and a Markdown renderer (e.g., `react-markdown` or `marked`).
- **Create Content Folder**: Create a `/posts` directory at the project root and add at least one sample `.md` file containing the required frontmatter (`title`, `subtitle`, `author`, `category`, `published_date`, `is_featured`, `slug`) and markdown content body.
- **Create Data Fetcher**: Create `src/lib/posts.ts`. Use Vite's `import.meta.glob('/posts/*.md', { query: '?raw', import: 'default' })` to read the files, parse their frontmatter, generate excerpt/content, and export functions like `getAllPosts()`, `getFeaturedPosts()`, and `getPostBySlug(slug)`.

### 2. Update React Components
- **HomePage**: Modify `src/components/HomePage.tsx` to remove Supabase hooks/API calls. Fetch the featured and recent articles synchronously (or via promises resolved from the glob) using the new `lib/posts.ts` utility.
- **ArticlePage**: Modify `src/components/ArticlePage.tsx` to remove Supabase fetches. Retrieve the specific article by the URL `slug` parameter via `getPostBySlug(slug)` and render the markdown body content using the chosen markdown renderer.
- **Validation**: Ensure all types strictly match the new local data structures and verify that the UI styling remains absolutely identical to before.
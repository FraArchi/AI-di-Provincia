# Plan: Remove all remaining Supabase references

## Context
The goal is to cleanly remove all traces of Supabase from the React/Vite/TypeScript blog now that local Markdown files are being used.

## Tasks

- [ ] **Task 1: Delete Supabase files and folders**
  - Delete `src/lib/supabase.ts`
  - Check for and delete the `supabase/` directory (e.g., `supabase/migrations/`)

- [ ] **Task 2: Remove dependencies**
  - Remove `@supabase/supabase-js` (or related supabase packages) from `package.json`
  - Run package manager install to update lock files

- [ ] **Task 3: Clean up remaining references**
  - Search the codebase (e.g., `src/`, `package.json`, `.env` files) for any remaining `supabase` imports or mentions.
  - Remove or refactor those lines to ensure no Supabase code remains anywhere.

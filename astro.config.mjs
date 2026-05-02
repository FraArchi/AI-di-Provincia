// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://aidiprovincia.it',
  adapter: vercel(),
  security: {
    checkOrigin: false,
  },
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

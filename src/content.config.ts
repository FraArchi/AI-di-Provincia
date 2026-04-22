import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional().nullable(),
    author: z.string(),
    category: z.string().optional().nullable(),
    published_date: z.string().or(z.date()),
    featured: z.boolean().optional().default(false),
    featuredOrder: z.number().optional(),
    slug: z.string().optional(),
  })
});

export const collections = {
  'posts': postsCollection,
};

// Polyfill Buffer for gray-matter to work in the browser (client-side)
if (typeof window !== 'undefined' && typeof (window as any).Buffer === 'undefined') {
  (window as any).Buffer = {
    isBuffer: () => false,
    from: (val: any) => ({
      toString: () => (val != null ? val.toString() : '')
    })
  };
}

import matter from 'gray-matter';

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  author: string;
  category: string | null;
  content: string;
  published_date: string;
  is_featured: boolean;
  created_at: string;
}

export async function getAllPosts(): Promise<Article[]> {
  // Use the requested glob pattern
  const markdownFiles = import.meta.glob('/posts/*.md', { as: 'raw', eager: true });
  const articles: Article[] = [];

  for (const path in markdownFiles) {
    const rawContent = markdownFiles[path] as string;
    const { data, content } = matter(rawContent);

    // Extract filename as default slug if not provided in frontmatter
    const filename = path.replace('/posts/', '').replace('.md', '');

    articles.push({
      id: path, 
      slug: data.slug || filename,
      title: data.title || 'Untitled',
      subtitle: data.subtitle || null,
      author: data.author || 'Unknown',
      category: data.category || null,
      content: content.trim(),
      published_date: data.published_date || new Date().toISOString(),
      is_featured: data.is_featured || false,
      created_at: data.published_date || new Date().toISOString(),
    });
  }

  // Sort by published_date descending
  return articles.sort((a, b) => new Date(b.published_date).getTime() - new Date(a.published_date).getTime());
}

export async function getFeaturedPosts(): Promise<Article[]> {
  const articles = await getAllPosts();
  return articles.filter((a) => a.is_featured);
}

export async function getPostBySlug(slug: string): Promise<Article | null> {
  const articles = await getAllPosts();
  return articles.find((a) => a.slug === slug) || null;
}

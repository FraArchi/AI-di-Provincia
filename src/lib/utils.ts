import { getCollection } from 'astro:content';
import type { CategoryArticle } from '../components/Navigation';

export async function getRubriche(lang: 'it' | 'en' = 'it'): Promise<CategoryArticle[]> {
  const posts = await getCollection('posts', ({ id, data }) => {
    const isEn = id.startsWith('en/') || data.lang === 'en';
    return lang === 'en' ? isEn : !isEn;
  });
  // Sort posts by date descending
  const sorted = posts.sort((a, b) => new Date(b.data.published_date).valueOf() - new Date(a.data.published_date).valueOf());
  
  const grouped: Record<string, CategoryArticle> = {};
  
  sorted.forEach(post => {
    const category = post.data.category;
    if (category && !grouped[category]) {
      grouped[category] = {
        category,
        title: post.data.title,
        slug: post.data.slug || post.id,
        cover: post.data.cover,
      };
    }
  });
  
  return Object.values(grouped);
}

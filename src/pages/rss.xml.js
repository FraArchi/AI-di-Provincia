import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  return rss({
    title: 'AI di Provincia',
    description: 'Intelligenza artificiale vista dall\'Alta Irpinia. Storie, riflessioni e reportage sull\'IA dalla provincia italiana.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.published_date),
      description: post.data.excerpt || post.data.subtitle || 'Nuovo articolo su AI di Provincia',
      link: `/post/${post.data.slug || post.id}/`,
    })),
  });
}

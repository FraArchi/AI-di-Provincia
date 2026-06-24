import type { APIRoute } from 'astro';
import Redis from 'ioredis';

let redis: Redis | null = null;

function getRedis(): Redis {
  if (!redis) {
    const url = process.env.REDIS_URL;
    console.log('[comments] REDIS_URL set:', !!url);
    redis = new Redis(url, {
      maxRetriesPerRequest: 3,
      enableReadyCheck: false,
      lazyConnect: true,
    });
  }
  return redis;
}

const COMMENTS_KEY = 'blog:comments';

export const GET: APIRoute = async ({ url }) => {
  const slug = url.searchParams.get('slug');

  if (!slug) {
    return new Response(JSON.stringify({ error: 'Slug required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const postKey = `${COMMENTS_KEY}:${slug}`;
    const data = await getRedis().get(postKey);
    const comments = data ? JSON.parse(data) : [];

    return new Response(JSON.stringify(comments), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('GET error:', error);
    return new Response(JSON.stringify({ error: 'Internal error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { slug, username, text } = body;

    if (!slug || !username || !text) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (username.length > 50 || text.length > 2000) {
      return new Response(JSON.stringify({ error: 'Content too long' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const postKey = `${COMMENTS_KEY}:${slug}`;
    const data = await getRedis().get(postKey);
    const comments = data ? JSON.parse(data) : [];

    const newComment = {
      id: crypto.randomUUID(),
      slug,
      username: username.trim(),
      text: text.trim(),
      timestamp: new Date().toISOString()
    };

    comments.push(newComment);
    await getRedis().set(postKey, JSON.stringify(comments));

    return new Response(JSON.stringify({ success: true, comment: newComment }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('POST error:', error);
    return new Response(JSON.stringify({ error: 'Internal error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const DELETE: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { slug, id } = body;

    if (!slug || !id) {
      return new Response(JSON.stringify({ error: 'Slug and comment ID required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const postKey = `${COMMENTS_KEY}:${slug}`;
    const data = await getRedis().get(postKey);
    const comments = data ? JSON.parse(data) : [];
    const filtered = comments.filter((c: any) => c.id !== id);
    await getRedis().set(postKey, JSON.stringify(filtered));

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

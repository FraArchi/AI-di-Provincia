import type { APIRoute } from 'astro';
import { Redis } from '@upstash/redis';

function getRedis(): Redis {
  const redisUrl = process.env.REDIS_URL;
  if (!redisUrl) {
    return Redis.fromEnv();
  }
  const url = new URL(redisUrl);
  return new Redis({
    url: `https://${url.hostname}`,
    token: url.password,
  });
}

const redis = getRedis();
const COMMENTS_KEY = 'blog:comments';

export const GET: APIRoute = async ({ url }) => {
  const slug = url.searchParams.get('slug');

  if (!slug) {
    return new Response(JSON.stringify({ error: 'Slug required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const postKey = `${COMMENTS_KEY}:${slug}`;
  const comments = await redis.get<any[]>(postKey) || [];

  return new Response(JSON.stringify(comments), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
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
    const comments = await redis.get<any[]>(postKey) || [];

    const newComment = {
      id: crypto.randomUUID(),
      slug,
      username: username.trim(),
      text: text.trim(),
      timestamp: new Date().toISOString()
    };

    comments.push(newComment);
    await redis.set(postKey, comments);

    return new Response(JSON.stringify({ success: true, comment: newComment }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('POST /api/comments error:', error);
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
    const comments = await redis.get<any[]>(postKey) || [];
    const filtered = comments.filter((c: any) => c.id !== id);
    await redis.set(postKey, filtered);

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

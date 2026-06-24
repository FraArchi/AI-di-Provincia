import type { APIRoute } from 'astro';
import { kv } from '@vercel/kv';

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
  const comments = await kv.get<any[]>(postKey) || [];

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
    const comments = await kv.get<any[]>(postKey) || [];

    const newComment = {
      id: crypto.randomUUID(),
      slug,
      username: username.trim(),
      text: text.trim(),
      timestamp: new Date().toISOString()
    };

    comments.push(newComment);
    await kv.set(postKey, comments);

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
    const comments = await kv.get<any[]>(postKey) || [];
    const filtered = comments.filter((c: any) => c.id !== id);
    await kv.set(postKey, filtered);

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

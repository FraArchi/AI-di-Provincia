import type { APIRoute } from 'astro';
import { put, list } from '@vercel/blob';

const COMMENTS_PREFIX = 'blog/comments/';

async function getCommentsForSlug(slug: string): Promise<any[]> {
  const { blobs } = await list({ prefix: `${COMMENTS_PREFIX}${slug}.json`, limit: 1 });
  if (blobs.length > 0) {
    const response = await fetch(blobs[0].url);
    if (response.ok) {
      const data = await response.json();
      return data.comments || [];
    }
  }
  return [];
}

export const GET: APIRoute = async ({ url }) => {
  const slug = url.searchParams.get('slug');

  if (!slug) {
    return new Response(JSON.stringify({ error: 'Slug required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const comments = await getCommentsForSlug(slug);

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

    const comments = await getCommentsForSlug(slug);

    const newComment = {
      id: crypto.randomUUID(),
      slug,
      username: username.trim(),
      text: text.trim(),
      timestamp: new Date().toISOString()
    };

    comments.push(newComment);

    // Save updated comments to blob
    await put(`${COMMENTS_PREFIX}${slug}.json`, JSON.stringify({ comments }), {
      contentType: 'application/json',
      access: 'public',
    });

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
        headers: { 'Content-Type: 'application/json' }
      });
    }

    const comments = await getCommentsForSlug(slug);
    const filtered = comments.filter((c: any) => c.id !== id);

    await put(`${COMMENTS_PREFIX}${slug}.json`, JSON.stringify({ comments: filtered }), {
      contentType: 'application/json',
      access: 'public',
    });

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

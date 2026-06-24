// /api/debug.ts - debug endpoint for comments system
import type { APIRoute } from 'astro';
import Redis from 'ioredis';

export const GET: APIRoute = async () => {
  const results: Record<string, any> = {};

  // Check env vars
  results.envVars = {
    REDIS_URL_set: !!process.env.REDIS_URL,
    REDIS_URL_prefix: process.env.REDIS_URL ? process.env.REDIS_URL.substring(0, 20) + '...' : null,
  };

  // Test Redis connection
  const url = process.env.REDIS_URL;
  if (url) {
    try {
      const redis = new Redis(url, {
        maxRetriesPerRequest: 1,
        enableReadyCheck: false,
        lazyConnect: true,
        connectTimeout: 5000,
      });
      await redis.set('debug:test', 'ok');
      const val = await redis.get('debug:test');
      results.redis = { connected: true, testValue: val };
      await redis.quit();
    } catch (e: any) {
      results.redis = { connected: false, error: e.message };
    }
  } else {
    results.redis = { connected: false, error: 'REDIS_URL not set' };
  }

  return new Response(JSON.stringify(results, null, 2), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};

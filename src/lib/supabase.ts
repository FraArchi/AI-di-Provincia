import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

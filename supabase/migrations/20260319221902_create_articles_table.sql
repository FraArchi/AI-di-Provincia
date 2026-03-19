/*
  # Create articles table for AI di Provincia blog

  1. New Tables
    - `articles`
      - `id` (uuid, primary key)
      - `slug` (text, unique)
      - `title` (text)
      - `subtitle` (text)
      - `author` (text)
      - `category` (text)
      - `content` (text)
      - `published_date` (date)
      - `is_featured` (boolean)
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS on `articles` table
    - Add policy for public read access (blog is public)
*/

CREATE TABLE IF NOT EXISTS articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  subtitle text,
  author text NOT NULL DEFAULT 'AI di Provincia',
  category text,
  content text NOT NULL,
  published_date date NOT NULL,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read articles"
  ON articles
  FOR SELECT
  TO anon, authenticated
  USING (true);
-- SQL Setup & Initial Data Seed Script for Supabase Project: naqeeb-portfolio
-- Paste this script into Supabase SQL Editor and click RUN!

-- 1. Create Gallery Pictures Table
CREATE TABLE IF NOT EXISTS public.gallery_pictures (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  category TEXT DEFAULT 'Honors',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create Gallery Videos Table
CREATE TABLE IF NOT EXISTS public.gallery_videos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  subtitle TEXT,
  badge TEXT DEFAULT 'Video Reel',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Enable Row Level Security (RLS) & Public Read/Write Policies
ALTER TABLE public.gallery_pictures ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_videos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access for pictures" ON public.gallery_pictures FOR SELECT USING (true);
CREATE POLICY "Allow public read access for videos" ON public.gallery_videos FOR SELECT USING (true);

CREATE POLICY "Allow public insert access for pictures" ON public.gallery_pictures FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert access for videos" ON public.gallery_videos FOR INSERT WITH CHECK (true);

-- 4. Seed Initial Media Data (10 Pictures + 2 Videos)
INSERT INTO public.gallery_pictures (title, url, category) VALUES
  ('Award Ceremony Event', '/g1.jpeg', 'Honors'),
  ('Faculty Presentation', '/g2.jpg', 'Academic'),
  ('Computer Lab Supervision', '/g3.jpg', 'Mentorship'),
  ('Best Teacher Award Presentation', '/g4.jpg', 'Honors'),
  ('GIAIC AI Session', '/g6.jpeg', 'AI & Tech'),
  ('Student Web Workshop', '/g7.jpeg', 'Mentorship'),
  ('Certification Ceremony', '/g8.jpeg', 'Honors'),
  ('Technical Seminar', '/g9.jpeg', 'Academic'),
  ('Faculty Milestone', '/g10.jpeg', 'Academic'),
  ('Appreciation Recognition', '/g11.jpeg', 'Honors')
ON CONFLICT DO NOTHING;

INSERT INTO public.gallery_videos (title, url, subtitle, badge) VALUES
  ('All Sindh Teachers Appreciation Award Ceremony 2021', '/v1.mp4', 'Receiving the Best Mathematics & Computer Teacher Award', 'Award Ceremony Video'),
  ('E-Commerce & Dynamic Application Demonstration', '/v2.mp4', 'Interactive walkthrough showcasing Next.js and full-stack features', 'Project Feature Reel')
ON CONFLICT DO NOTHING;

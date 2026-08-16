-- Run this SQL in Supabase SQL Editor to allow public Storage uploads to bucket 'gallery'

CREATE POLICY "Public Read Storage" ON storage.objects
  FOR SELECT USING (bucket_id = 'gallery');

CREATE POLICY "Public Insert Storage" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'gallery');

CREATE POLICY "Public Update Storage" ON storage.objects
  FOR UPDATE WITH CHECK (bucket_id = 'gallery');

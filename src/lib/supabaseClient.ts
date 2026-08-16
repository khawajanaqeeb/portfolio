import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export interface SupabaseMediaItem {
  id: string;
  title: string;
  url: string;
  category: "picture" | "video";
  created_at?: string;
}

/**
 * Helper to fetch pictures dynamically from Supabase Storage / Database table
 */
export async function getGalleryPictures(): Promise<SupabaseMediaItem[]> {
  if (!supabase) return [];
  try {
    const { data, error } = await supabase
      .from("gallery_pictures")
      .select("*")
      .order("created_at", { ascending: false });

    if (error || !data) {
      console.warn("Supabase fetch gallery_pictures error:", error?.message);
      return [];
    }
    return data as SupabaseMediaItem[];
  } catch (err) {
    console.error("Supabase getGalleryPictures caught exception:", err);
    return [];
  }
}

/**
 * Helper to fetch videos dynamically from Supabase Storage / Database table
 */
export async function getGalleryVideos(): Promise<SupabaseMediaItem[]> {
  if (!supabase) return [];
  try {
    const { data, error } = await supabase
      .from("gallery_videos")
      .select("*")
      .order("created_at", { ascending: false });

    if (error || !data) {
      console.warn("Supabase fetch gallery_videos error:", error?.message);
      return [];
    }
    return data as SupabaseMediaItem[];
  } catch (err) {
    console.error("Supabase getGalleryVideos caught exception:", err);
    return [];
  }
}

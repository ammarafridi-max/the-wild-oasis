import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://diitkeobfscdwbvlmljj.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpaXRrZW9iZnNjZHdidmxtbGpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0ODMxNzcsImV4cCI6MjA0NzA1OTE3N30.gU_mx5bARP8ZAd3bR6zqVLq5yrFGh9n5AB6iDVqcIRU';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

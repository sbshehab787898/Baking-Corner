const SUPABASE_URL = 'https://ijaxvvpatxyxpadvgbup.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_VCPFUWqegL5xSS3VsYO76A_VXtvJGwR';

// Initialize Supabase Client correctly using the global SDK object
const supabaseInstance = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export for use in other scripts
window.supabaseClient = supabaseInstance;

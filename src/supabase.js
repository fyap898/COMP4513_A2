// File Name: supabase
// Purpose: Establish connection between the project and the Supabase database
// Detail: Uses environment variables (URL and API key) to initialize and export the Supabase client,
//         which is used throughout the project for data retrieval and manipulation.


import { createClient } from '@supabase/supabase-js';

const supabase_url = import.meta.env.VITE_SUPABASE_URL;
const supabase_key = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabase_url, supabase_key);

export default supabase;

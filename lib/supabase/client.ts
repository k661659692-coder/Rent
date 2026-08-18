import {createBrowserClient} from '@supabase/ssr';
export function createClient(){const u=process.env.NEXT_PUBLIC_SUPABASE_URL,k=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;if(!u||!k)return null;return createBrowserClient(u,k)}

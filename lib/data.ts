import {DEMO_LISTINGS} from './demo-data';
import type {Listing} from './types';
export async function getListings():Promise<Listing[]>{
  if(!process.env.NEXT_PUBLIC_SUPABASE_URL||!process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY)return DEMO_LISTINGS;
  const {createClient}=await import('./supabase/server'); const supabase=await createClient();
  const {data}=await supabase.from('listings').select('*').eq('active',true).order('created_at',{ascending:false});
  return (data as Listing[])||DEMO_LISTINGS;
}

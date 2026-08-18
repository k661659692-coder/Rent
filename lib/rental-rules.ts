import type { Listing } from './types';
export const parseLocal=(d:string,t:string)=>new Date(`${d}T${t}:00`);
export const minutes=(a:Date,b:Date)=>Math.round((b.getTime()-a.getTime())/60000);
export const withinHours=(l:Listing,t:string)=>t>=l.open_time&&t<=l.close_time;
export function units(l:Listing,start:Date,end:Date){const m=minutes(start,end);if(m<=0)return 0;if(l.rental_type==='hourly')return Math.max(Math.ceil(m/60),l.minimum_hours||1);const grace=Math.max(0,l.grace_minutes||0);if(m<=1440+grace)return 1;return Math.ceil((m-grace)/1440);}
export const total=(l:Listing,u:number)=>Math.round(l.price*u*100)/100;
export function overlap(a:Date,b:Date,c:Date,d:Date,buffer:number){const blocked=new Date(d.getTime()+buffer*60000);return a<blocked&&b>c;}

export type RentalType = 'hourly' | 'daily';
export type Listing = { id:string; owner_id?:string|null; title:string; category:string; subcategory?:string|null; brand?:string|null; model?:string|null; description?:string|null; city:string; price:number; currency:string; rental_type:RentalType; open_time:string; close_time:string; buffer_minutes:number; grace_minutes:number; minimum_hours:number; deposit:number; instant_booking:boolean; active:boolean; image_url?:string|null };
export type ExistingBooking = { listing_id:string; start_at:string; end_at:string };

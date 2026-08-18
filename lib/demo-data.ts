import type { Listing } from './types';
export const CATEGORIES=['Cars','Motorcycles','Campers','Bikes','Boats','Photo & Video','Equipment','Tools','Real Estate'];
export const DEMO_LISTINGS: Listing[]=[
{id:'bmw-gs',title:'BMW R1250 GS',category:'Motorcycles',subcategory:'Adventure',brand:'BMW',model:'R1250 GS',description:'Adventure motorcycle for road trips.',city:'Warsaw',price:350,currency:'PLN',rental_type:'daily',open_time:'08:00',close_time:'20:00',buffer_minutes:60,grace_minutes:60,minimum_hours:1,deposit:1500,instant_booking:false,active:true},
{id:'bmw-320',title:'BMW 320i',category:'Cars',subcategory:'Sedan',brand:'BMW',model:'320i',description:'Comfortable city and highway car.',city:'Warsaw',price:180,currency:'PLN',rental_type:'daily',open_time:'08:00',close_time:'20:00',buffer_minutes:60,grace_minutes:60,minimum_hours:1,deposit:1000,instant_booking:true,active:true},
{id:'bmw-bike',title:'BMW City Bike',category:'Bikes',subcategory:'City',brand:'BMW',model:'City Bike',description:'Urban bicycle for Warsaw.',city:'Warsaw',price:25,currency:'PLN',rental_type:'hourly',open_time:'08:00',close_time:'21:00',buffer_minutes:30,grace_minutes:0,minimum_hours:1,deposit:100,instant_booking:true,active:true},
{id:'ducato',title:'Fiat Ducato Camper',category:'Campers',subcategory:'Campervan',brand:'Fiat',model:'Ducato',description:'Campervan ready for European road trips.',city:'Warsaw',price:450,currency:'PLN',rental_type:'daily',open_time:'09:00',close_time:'19:00',buffer_minutes:120,grace_minutes:60,minimum_hours:1,deposit:3000,instant_booking:false,active:true}
];

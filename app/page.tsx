import HomeClient from '@/components/HomeClient'; import {getListings} from '@/lib/data';
export default async function Page(){return <HomeClient listings={await getListings()}/>}

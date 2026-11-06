import{cacheTag,cacheLife} from "next/cache";

export async function getuserstate() {
  'use cache';
  cacheTag('user-state');
  cacheLife('hours');
  const res=await fetch('https://dummyjson.com/users')
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
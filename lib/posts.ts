import { cacheTag,cacheLife } from "next/cache";

export async function getposts() {
  'use cache';
  cacheTag('posts');
  cacheLife('hours');

  const res = await fetch('https://dummyjson.com/posts');
    
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export async function getpostbyslug(slug: string ) {
  'use cache';
  cacheTag('posts');
  cacheLife('hours');
    const res = await fetch(`https://dummyjson.com/posts/${slug}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
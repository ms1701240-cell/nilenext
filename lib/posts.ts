import { db } from "@/lib/db";
import { cacheTag, cacheLife } from "next/cache";

export async function getposts(search: string = "", page: number = 1) {
  'use cache';
  cacheTag('posts');
  cacheLife('hours');

  const limit = 10;
  const skip = (page - 1) * limit;

  try {
    const posts = await db.post.findMany({
      where: search
        ? {
            title: {
              contains: search,
              mode: 'insensitive', // بحث غير حساس لحالة الحروف
            },
          }
        : undefined,
      orderBy: {
        createdAt: 'desc', // ترتيب تنازلي: الأحدث يظهر أولاً فوراً
      },
      take: limit,
      skip: skip,
      include: {
        author: {
          select: { name: true, email: true },
        },
      },
    });

    return posts;
  } catch (error) {
    console.error("Error fetching posts from database:", error);
    return [];
  }
}

export async function getpostbyslug(id: string) {
  'use cache';
  cacheTag('posts');
  cacheLife('hours');
  
  try {
    const post = await db.post.findUnique({
      where: { id },
      include: {
        author: {
          select: { name: true, email: true },
        },
      },
    });
    return post;
  } catch (error) {
    console.error("Error fetching post by id:", error);
    return null;
  }
}
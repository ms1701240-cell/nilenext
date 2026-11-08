import type { Metadata } from 'next';
import { getpostbyslug } from '@/lib/posts';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>; // أو id حسب مسارك
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getpostbyslug(slug);

  if (!post) return { title: 'Post Not Found' };

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const ogImageUrl = `${baseUrl}/images/hero/home-hero.jpg`;

  // أخذ أول 150 حرف من المحتوى كبديل للـ excerpt لو مش موجود
  const descriptionText = post.content ? post.content.substring(0, 150) : 'مقال جديد من مجتمع Nile';

  return {
    title: post.title,
    description: descriptionText,
    openGraph: {
      type: 'article',
      title: post.title,
      description: descriptionText,
      url: `${baseUrl}/blog/${post.id}`, // استخدام id لو هو الموجود
      publishedTime: post.createdAt.toISOString(),
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: descriptionText,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: `${baseUrl}/blog/${post.id}`,
    },
  };
}
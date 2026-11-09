import type { Metadata } from 'next';
import { getpostbyslug } from '@/lib/posts';

// 1. توليد الميتا داتا (SEO & OpenGraph)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getpostbyslug(slug);

  if (!post) return { title: 'Post Not Found' };

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const ogImageUrl = `${baseUrl}/images/hero/home-hero.jpg`;
  const descriptionText = post.content ? post.content.substring(0, 150) : 'مقال جديد من مجتمع Nile';

  return {
    title: post.title,
    description: descriptionText,
    openGraph: {
      type: 'article',
      title: post.title,
      description: descriptionText,
      url: `${baseUrl}/blog/${post.id}`,
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

// 2. الكومبوننت الأساسي للصفحة (الذي يعرض المحتوى)
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getpostbyslug(slug);

  if (!post) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-2xl font-bold">Post Not Found</h1>
      </div>
    );
  }

  return (
    <article className="container mx-auto py-10 max-w-3xl px-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-6">
        {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <div className="prose max-w-none leading-relaxed">
        {post.content}
      </div>
    </article>
  );
}
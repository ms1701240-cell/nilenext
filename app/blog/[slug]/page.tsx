
import { getpostbyslug } from "@/lib/posts"

export default async function page({ params }: { params: Promise< { slug: string }>}) {
 const resolvedParams = await params;
  const post = await getpostbyslug(resolvedParams.slug);

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 mb-6">{post.title}</h1>
      <p className="text-lg text-slate-700">{post.body}</p>
    </div>
  )
}

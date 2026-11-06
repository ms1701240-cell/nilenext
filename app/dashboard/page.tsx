
import {getposts} from '@/lib/posts';
import { getuserstate } from '@/lib/dashboard';


export default async function dashboard() {
  const[posts,stats]= await Promise.all([getposts(),getuserstate()]);  
  return (
    <div>
      <div className="mx-auto max-w-6xl p-6 lg:p-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">Creator Dashboard</h1>
      
      {/* قسم الإحصائيات */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Total Posts</p>
          <p className="text-2xl font-bold text-slate-900">{stats?.totalPosts || 12}</p>
        </div>
        {/* ممكن تزود كروت تانية براحتك */}
      </div>

      {/* قسم المقالات السريعة */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Recent Posts Feed</h2>
        <ul className="space-y-3">
          {posts?.map((post: any) => (
            <li key={post.id} className="p-3 bg-slate-50 rounded-lg text-slate-700">
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  )
}

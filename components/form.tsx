'use client';

import { useActionState, useOptimistic } from "react";
import { ActionState, postaction } from "@/app/actions/post-action";
import { ButtonForm } from "./buttonform";


type Post = {
  title: string;
  content: string;
};

const initialState: ActionState = {
  success: false,
  message: "",
    
};

export default function CreatePostForm(props: React.FormHTMLAttributes<HTMLFormElement>) {
  const [state, formAction] = useActionState(postaction, initialState);

  const [optimisticPosts, setOptimisticPosts] = useOptimistic<Post[], Post>(
    [],
    (state, newPost) => [newPost, ...state]
  );

  async function handleSubmit(formData: FormData) {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    if (title && content) {
      setOptimisticPosts({ title, content });
    }

    formAction(formData);
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">إنشاء منشور جديد</h2>

      <form action={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">عنوان البوست</label>
          <input 
            type="text" 
            name="title" 
            placeholder="اكتب العنوان..." 
            className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500" 
          />
         {state.errors && (
            <p className="text-red-500 text-sm mt-1">{state.errors.title?.[0]}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">المحتوى</label>
          <textarea 
            name="content" 
            rows={4}
            placeholder="اكتب تفاصيل البوست..." 
            className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500" 
          />
          {state.errors && (
            <p className="text-red-500 text-sm mt-1">{state.errors.content?.[0]}</p>
          )}
        </div>

        <ButtonForm />

        {state.message && (
          <p className={`p-3 rounded-md text-sm text-center ${
            state.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}>
            {state.message}
          </p>
        )}
      </form>

      <div className="space-y-3 mt-6">
        <h3 className="font-semibold text-gray-700">المنشورات الحالية (مع التحديث اللحظي):</h3>
        {optimisticPosts.map((post, idx) => (
          <div key={idx} className="p-4 border border-dashed border-gray-300 rounded-lg bg-gray-50 opacity-75">
            <h4 className="font-bold text-gray-800">{post.title}</h4>
            <p className="text-sm text-gray-600">{post.content}</p>
            <span className="text-xs text-blue-500 font-medium">جاري الحفظ والرفع... ⚡</span>
          </div>
        ))}
      </div>
    </div>
  );
}


export default function Loading() {
  return (
    <div>
      <div className="mx-auto max-w-6xl p-6 lg:p-8 space-y-6 animate-pulse">
      <div className="h-8 bg-slate-200 rounded w-1/4"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="h-48 bg-slate-200 rounded-xl"></div>
        <div className="h-48 bg-slate-200 rounded-xl"></div>
        <div className="h-48 bg-slate-200 rounded-xl"></div>
      </div>
    </div>
    </div>
  )
}




import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
      >
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
          Nile
        </Link>
        <ul className="flex flex-wrap items-center gap-2 sm:gap-6">
          <li>
            <Link href="/" className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950">
              About
            </Link>
          </li>
          <li className="relative">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 [&::-webkit-details-marker]:hidden">
                Blog
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-4 transition-transform group-open:rotate-180"
                >
                  <path fillRule="evenodd" d="M5.22 7.47a.75.75 0 0 1 1.06 0L10 11.19l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 8.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </summary>
              <ul className="absolute right-0 z-20 mt-2 min-w-52 overflow-hidden rounded-xl border border-slate-200 bg-white p-2 text-right shadow-lg">
                <li>
                  <Link href="/blog" className="block rounded-lg px-4 py-2.5 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-slate-950">
                    All Posts
                  </Link>
                </li>
                <li>
                  <Link href="/blog/featured-posts" className="block rounded-lg px-4 py-2.5 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-slate-950">
                    Featured Posts
                  </Link>
                </li>
                <li>
                  <Link href="/blog/student-stories" className="block rounded-lg px-4 py-2.5 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-slate-950">
                    حكايات طلابية
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/dashboard" className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
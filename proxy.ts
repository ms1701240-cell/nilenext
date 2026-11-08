import { auth } from "@/auth"
import { NextResponse } from "next/server"
import { checkRateLimit } from "@/lib/rate-limit" 

export default auth((req) => {
  
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "127.0.0.1"
  const { isExceeded, retryAfterSeconds } = checkRateLimit(ip, 120, 60_000)

  
  if (isExceeded) {
    return new NextResponse("Too Many Requests", {
      status: 429,
      headers: {
        "Retry-After": retryAfterSeconds.toString(),
      },
    })
  }

 
  const isLoggedIn = !!req.auth
  const isOnAdmin = req.nextUrl.pathname.startsWith("/admin")
  const userRole = req.auth?.user?.role

  
  if (isOnAdmin) {
    if (!isLoggedIn || userRole !== "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard", req.url))
    }
  }

 
  return NextResponse.next()
})

export const config = {
 
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
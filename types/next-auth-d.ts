import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface User {
    role?: "ADMIN" | "EDITOR" | "VIEWER"
  }

  interface Session {
    user: {
      role?: "ADMIN" | "EDITOR" | "VIEWER"
    } & DefaultSession["user"]
  }
}
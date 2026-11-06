
import { revalidateTag } from "next/cache"
export async function invalidateposts() {
  revalidateTag('posts','hours');
}

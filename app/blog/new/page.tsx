import CreatePostForm from "@/components/form";
import {connection} from "next/server";
export default async function page() {
  await connection(); // Ensure the database connection is established before rendering the page
  return (
    <div>
      <CreatePostForm />
    </div>
  )
}

  

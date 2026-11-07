'use server ';
import {userSchema} from "@/lib/Schema/userschema";
export type ActionState = {
  success: boolean;
  message: string;
  errors?:{
    title?: string[];
    content?: string[];
  } ;   
  
};
export async function postaction(prevstate: ActionState, formData: FormData): Promise<ActionState> {
  const result = userSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (!result.success) {
    return {
      success: false,
      message: result.error.issues[0].message,
     errors: result.error.flatten().fieldErrors
    };
  }


  
  return {
    success: true,
    message: "Post created successfully!",
   
  };
}
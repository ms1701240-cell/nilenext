import {z} from "zod";

export const userSchema = z.object({
  
 title: z.string().min(3, { message: "العنوان يجب ألا يقل عن 3 أحرف!" }),
  content: z.string().min(10, { message: "المحتوى يجب ألا يقل عن 10 أحرف!" }),
  
});
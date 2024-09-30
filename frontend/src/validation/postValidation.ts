import { z } from "zod"
export const PostSchema = z.object({ 
    title: z.string().min(4, {
        message: 'Title should be atleast 4 words'
    }).max(30, {
        message: 'Title should be at most 30 words'
    }),
    content: z.string().min(4, {
        message: "Content must be atleast 4 letter"
    })
})
export type PostType = z.infer<typeof PostSchema>
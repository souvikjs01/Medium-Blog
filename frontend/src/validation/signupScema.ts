import { z } from "zod"

export const SignUpSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be atleast two letter"
    }).max(20, {
        message: "Name must be less than 20 words"
    }), 
    email: z.string().email(),
    password: z.string().min(4, {
        message: "Password must 4 letter"
    }).max(11, {
        message: "Password contain maximum of 10 letter"
    })
})

export type SignUpType = z.infer<typeof SignUpSchema>
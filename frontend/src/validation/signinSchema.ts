import { z } from "zod"
export const SignInSchema = z.object({ 
    email: z.string().email(),
    password: z.string().min(4, {
        message: "Password must 4 letter"
    }).max(11, {
        message: "Password contain maximum of 10 letter"
    })
})
export type SignInType = z.infer<typeof SignInSchema>
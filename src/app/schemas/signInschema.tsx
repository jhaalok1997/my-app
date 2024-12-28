import {z} from  "zod";

export const signInSchema = z.object({
    code: z.string().length(6, "Verification Code must be at least 6 characters long"),
    Password: z.string().min(6, "Password must be at least 6 characters long"),
})
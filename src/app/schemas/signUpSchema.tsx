import {z} from "zod";

export const usernameValidation = z.string()
.min(2, "Username must be at least 2 characters long")
.max(20, "Username must be at most 20 characters long")
.regex(/^[a-zA-Z0-9]+$/, "Username must contain only alphanumeric characters"); 


export const  signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string(),
});
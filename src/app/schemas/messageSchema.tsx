import {z} from 'zod' ;


export const messageSchema = z.object({
    content: z.string().min(15, "Accept Messages must be at least 15 characters long").max(300,"Accept Messages must be at most 300 characters long"),

});
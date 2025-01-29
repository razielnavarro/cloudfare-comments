import { z } from 'zod';

export const commentSchema = z.object({
    author: z.string().min(2),
    body: z.string().min(5)
});
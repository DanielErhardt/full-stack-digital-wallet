import { z } from 'zod';

export const userFormSchema = z.object({
  username: z.string().min(6),
  password: z.string().min(6),
});

//* * User data input. For login and new user creation. */
export type UserFormDTO = z.infer<typeof userFormSchema>;

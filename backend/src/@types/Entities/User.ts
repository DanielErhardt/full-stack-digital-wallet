import { z } from 'zod';
import { entitySchema } from './Entity';

export const userSchema = entitySchema.extend({
  username: z.string().min(6),
  password: z.string().min(6).optional(),
  accountId: z.string().uuid(),
  role: z.enum(['user', 'parent']).optional(),
});

export type User = z.infer<typeof userSchema>;

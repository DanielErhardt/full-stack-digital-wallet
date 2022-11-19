import { z } from 'zod';
import { entitySchema } from './Entity';

export const userSchema = entitySchema.extend({
  username: z.string().min(6),
  password: z.string().min(6),
  accountId: z.string().uuid(),
});

export type User = z.infer<typeof userSchema>;

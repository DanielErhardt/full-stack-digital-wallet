import { z } from 'zod';
import { entitySchema } from './Entity';

export const accountSchema = entitySchema.extend({
  balance: z.number(),
});

export type Account = z.infer<typeof accountSchema>;

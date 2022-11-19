import { z } from 'zod';
import { entitySchema } from './Entity';

export const transactionSchema = entitySchema.extend({
  debitedAccount: z.string().uuid(),
  creditedAccount: z.string().uuid(),
  value: z.number().min(0.01),
  createdAt: z.string().optional(),
});

export type Transaction = z.infer<typeof transactionSchema>;

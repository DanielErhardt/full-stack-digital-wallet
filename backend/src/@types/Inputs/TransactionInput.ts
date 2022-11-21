import { z } from 'zod';

export const cashTransferSchema = z.object({
  debitedUsername: z.string().min(6).optional(),
  creditedUsername: z.string().min(6),
  value: z.number().min(0.01),
});

export type TransactionInput = z.infer<typeof cashTransferSchema>;

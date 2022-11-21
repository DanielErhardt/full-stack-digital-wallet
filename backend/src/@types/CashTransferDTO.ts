import { z } from 'zod';

export const cashTransferSchema = z.object({
  creditedUsername: z.string(),
  value: z.number().min(0.01),
});

export type CashTransferDTO = z.infer<typeof cashTransferSchema>;

import { z } from 'zod';

export const cashTransferSchema = z.object({
  userId: z.string().uuid(),
  receiverUsername: z.string(),
  value: z.number().min(0.01),
});

export type CashTransferDTO = z.infer<typeof cashTransferSchema>;

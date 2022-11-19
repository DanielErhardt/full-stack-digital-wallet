import { z } from 'zod';

export const entitySchema = z.object({
  id: z.string().optional(),
});

export type Entity = z.infer<typeof entitySchema>;

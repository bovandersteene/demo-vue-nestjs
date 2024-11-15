import { z } from 'zod';

export const OwnerSchema = z.object({
  name: z.string(),
  age: z.number(),
});

export type Owner = z.infer<typeof OwnerSchema>

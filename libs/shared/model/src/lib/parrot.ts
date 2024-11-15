import { z } from 'zod';

export const ParrotSchema = z.object({
  name: z.string(),
  age: z.number(),
});

export type Parrot = z.infer<typeof ParrotSchema>

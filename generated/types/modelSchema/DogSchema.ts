import { z } from 'zod';

/////////////////////////////////////////
// DOG SCHEMA
/////////////////////////////////////////

export const DogSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  name: z.string(),
  age: z.number().min(0),
  totalTeeths: z.number().min(0).nullable(),
})

export type Dog = z.infer<typeof DogSchema>

export default DogSchema;

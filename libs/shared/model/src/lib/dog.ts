import { z } from 'zod';
import { createFromZodSchema } from './form-schemas';
import { DogSchema } from '@demo-vue-nestjs/types';

export const _DogSchema = z.object({
  id: z.number().nullish().describe('Id of the dog'),
  name: z.string().describe('Name of the dog'),
  age: z.number(),
  totalTeeths: z.number().nullish().describe('Total teeths of the dog'),
});

export const DogForm = createFromZodSchema(DogSchema);

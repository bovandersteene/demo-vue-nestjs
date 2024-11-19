import { DogSchema } from '@demo-vue-nestjs/types';
import { createZodDto } from 'nestjs-zod';

const DogDtoSchema = DogSchema.pick({
  name: true,
  age: true,
  totalTeeths: true,
});

export class DogDto extends createZodDto(DogDtoSchema) {}

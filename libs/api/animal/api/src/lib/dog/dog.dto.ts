import { DogSchema } from '@demo-vue-nestjs/types';
import { createZodDto } from 'nestjs-zod';

export class DogDto extends createZodDto(DogSchema) {}

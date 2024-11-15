import { DogSchema } from '@demo-vue-nestjs/model';
import { createZodDto } from 'nestjs-zod';

export class DogDto extends createZodDto(DogSchema) {}

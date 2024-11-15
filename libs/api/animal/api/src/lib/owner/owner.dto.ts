import { OwnerSchema } from '@demo-vue-nestjs/model';
import { createZodDto } from 'nestjs-zod';

export class OwnerDto extends createZodDto(OwnerSchema) {}

import { createZodDto } from 'nestjs-zod';
import {  DogSchema,EmailSchema,EmailWithRelationsSchema,AddressSchema,AddressWithRelationsSchema,OwnerSchema,OwnerWithRelationsSchema} from './modelSchema';

export class DogDto extends createZodDto(DogSchema) {}

export class EmailDto extends createZodDto(EmailSchema) {}

export class EmailWithRelationsDto extends createZodDto(EmailWithRelationsSchema) {}

export class AddressDto extends createZodDto(AddressSchema) {}

export class AddressWithRelationsDto extends createZodDto(AddressWithRelationsSchema) {}

export class OwnerDto extends createZodDto(OwnerSchema) {}

export class OwnerWithRelationsDto extends createZodDto(OwnerWithRelationsSchema) {}

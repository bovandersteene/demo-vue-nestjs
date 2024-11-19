import { z } from 'zod';
import type { OwnerWithRelations } from './OwnerSchema'
import { OwnerWithRelationsSchema } from './OwnerSchema'

/////////////////////////////////////////
// ADDRESS SCHEMA
/////////////////////////////////////////

export const AddressSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  street: z.string(),
  number: z.string(),
  city: z.string(),
  postalCode: z.string(),
  country: z.string(),
  ownerId: z.number().int(),
})

export type Address = z.infer<typeof AddressSchema>

/////////////////////////////////////////
// ADDRESS RELATION SCHEMA
/////////////////////////////////////////

export type AddressRelations = {
  Owner: OwnerWithRelations;
};

export type AddressWithRelations = z.infer<typeof AddressSchema> & AddressRelations

export const AddressWithRelationsSchema: z.ZodType<AddressWithRelations> = AddressSchema.merge(z.object({
  Owner: z.lazy(() => OwnerWithRelationsSchema),
}))

export default AddressSchema;

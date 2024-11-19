import { z } from 'zod';
import type { EmailWithRelations } from './EmailSchema'
import type { AddressWithRelations } from './AddressSchema'
import { EmailWithRelationsSchema } from './EmailSchema'
import { AddressWithRelationsSchema } from './AddressSchema'

/////////////////////////////////////////
// OWNER SCHEMA
/////////////////////////////////////////

export const OwnerSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  name: z.string(),
  firstname: z.string(),
})

export type Owner = z.infer<typeof OwnerSchema>

/////////////////////////////////////////
// OWNER RELATION SCHEMA
/////////////////////////////////////////

export type OwnerRelations = {
  emails: EmailWithRelations[];
  addresses: AddressWithRelations[];
};

export type OwnerWithRelations = z.infer<typeof OwnerSchema> & OwnerRelations

export const OwnerWithRelationsSchema: z.ZodType<OwnerWithRelations> = OwnerSchema.merge(z.object({
  emails: z.lazy(() => EmailWithRelationsSchema).array(),
  addresses: z.lazy(() => AddressWithRelationsSchema).array(),
}))

export default OwnerSchema;

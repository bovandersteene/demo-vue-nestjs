import { z } from 'zod';
import type { OwnerWithRelations } from './OwnerSchema'
import { OwnerWithRelationsSchema } from './OwnerSchema'

/////////////////////////////////////////
// EMAIL SCHEMA
/////////////////////////////////////////

export const EmailSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  email: z.string(),
  ownerId: z.number().int(),
})

export type Email = z.infer<typeof EmailSchema>

/////////////////////////////////////////
// EMAIL RELATION SCHEMA
/////////////////////////////////////////

export type EmailRelations = {
  Owner: OwnerWithRelations;
};

export type EmailWithRelations = z.infer<typeof EmailSchema> & EmailRelations

export const EmailWithRelationsSchema: z.ZodType<EmailWithRelations> = EmailSchema.merge(z.object({
  Owner: z.lazy(() => OwnerWithRelationsSchema),
}))

export default EmailSchema;

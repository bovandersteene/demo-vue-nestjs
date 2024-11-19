import { z } from 'zod';
import { createFromZodSchema } from './form-schemas';
import {
  AddressSchema,
  EmailSchema,
  OwnerSchema as OriginalOwnerSchema,
} from '@demo-vue-nestjs/types';

export const OwnerSchema = OriginalOwnerSchema.extend({
  emails: z.array(EmailSchema),
  addresses: z.array(AddressSchema),
});

export type Owner = z.infer<typeof OwnerSchema>;

export const OwnerForm = createFromZodSchema(OwnerSchema);

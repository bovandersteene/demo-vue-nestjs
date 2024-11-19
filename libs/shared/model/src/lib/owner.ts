import { z } from 'zod';
import {
  AddressSchema,
  EmailSchema,
  OwnerSchema as OriginalOwnerSchema,
} from '@demo-vue-nestjs/types';
import { zodToJsonSchema } from 'zod-to-json-schema';

export const OwnerSchema = OriginalOwnerSchema.extend({
  emails: z.array(EmailSchema),
  addresses: z.array(AddressSchema),
});

export type Owner = z.infer<typeof OwnerSchema>;

export const OwnerForm = zodToJsonSchema(OwnerSchema);

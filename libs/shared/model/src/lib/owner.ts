import { z } from 'zod';
import { createFromZodSchema } from './form-schemas';

export const OwnerAddress = z.object({
  id: z.number().nullish(),
  street: z.string(),
  number: z.string(),
  city: z.string(),
  postalCode: z.string(),
  country: z.string(),
});

export const EmailSchema = z.object({
  id: z.number().nullish(),
  email: z.string().email(),
});

export const OwnerSchema = z.object({
  id: z.number().nullish(),
  name: z.string(),
  firstname: z.string(),
  emails: z.array(EmailSchema),
  addresses: z.array(OwnerAddress).nullish(),
});

export type Owner = z.infer<typeof OwnerSchema>;

export const OwnerForm = createFromZodSchema(OwnerSchema);

import { zodToJsonSchema } from 'zod-to-json-schema';
import { JsonSchema } from '@jsonforms/core';
import {
  AddressSchema,
  AddressWithRelationsSchema,
  DogSchema,
  EmailSchema,
  EmailWithRelationsSchema,
  OwnerSchema,
  OwnerWithRelationsSchema,
} from '../modelSchema';

export const DogFormDetail = zodToJsonSchema(
  DogSchema.definitions!['Schema'] as JsonSchema,
  'Schema'
);
export const DogSchema = DogFormDetail.definitions!['Schema'] as JsonSchema;

export const EmailFormDetail = zodToJsonSchema(
  EmailSchema.definitions!['Schema'] as JsonSchema,
  'Schema'
);
export const EmailSchema = EmailFormDetail.definitions!['Schema'] as JsonSchema;

export const EmailWithRelationsFormDetail = zodToJsonSchema(
  EmailWithRelationsSchema.definitions!['Schema'] as JsonSchema,
  'Schema'
);
export const EmailWithRelationsSchema =
  EmailWithRelationsFormDetail.definitions!['Schema'] as JsonSchema;

export const AddressFormDetail = zodToJsonSchema(
  AddressSchema.definitions!['Schema'] as JsonSchema,
  'Schema'
);
export const AddressSchema = AddressFormDetail.definitions![
  'Schema'
] as JsonSchema;

export const AddressWithRelationsFormDetail = zodToJsonSchema(
  AddressWithRelationsSchema.definitions!['Schema'] as JsonSchema,
  'Schema'
);
export const AddressWithRelationsSchema =
  AddressWithRelationsFormDetail.definitions!['Schema'] as JsonSchema;

export const OwnerFormDetail = zodToJsonSchema(
  OwnerSchema.definitions!['Schema'] as JsonSchema,
  'Schema'
);
export const OwnerSchema = OwnerFormDetail.definitions!['Schema'] as JsonSchema;

export const OwnerWithRelationsFormDetail = zodToJsonSchema(
  OwnerWithRelationsSchema.definitions!['Schema'] as JsonSchema,
  'Schema'
);
export const OwnerWithRelationsSchema =
  OwnerWithRelationsFormDetail.definitions!['Schema'] as JsonSchema;

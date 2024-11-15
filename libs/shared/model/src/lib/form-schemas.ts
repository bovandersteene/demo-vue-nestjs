import { zodToJsonSchema } from 'zod-to-json-schema';
import { z, ZodObject } from 'zod';
import { JsonSchema } from '@jsonforms/core';

export const createFromZodSchema = (schema: ZodObject<any>) => {
  const list = zodToJsonSchema(z.array(schema), 'Schema');
  const listForm = list.definitions!['Schema'] as JsonSchema;
  const detail = zodToJsonSchema(schema, 'Schema');
  const detailForm = detail.definitions!['Schema'] as JsonSchema;

  return {
    list,
    listForm,
    detail,
    detailForm,
  };
};

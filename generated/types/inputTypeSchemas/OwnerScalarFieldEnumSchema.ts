import { z } from 'zod';

export const OwnerScalarFieldEnumSchema = z.enum(['id','createdAt','name','firstname']);

export default OwnerScalarFieldEnumSchema;

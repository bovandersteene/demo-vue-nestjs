import { z } from 'zod';

export const EmailScalarFieldEnumSchema = z.enum(['id','createdAt','email','ownerId']);

export default EmailScalarFieldEnumSchema;

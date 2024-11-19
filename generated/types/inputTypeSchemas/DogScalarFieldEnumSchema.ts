import { z } from 'zod';

export const DogScalarFieldEnumSchema = z.enum(['id','createdAt','name','age','totalTeeths']);

export default DogScalarFieldEnumSchema;

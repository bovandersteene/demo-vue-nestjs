import { z } from 'zod';

export const AddressScalarFieldEnumSchema = z.enum(['id','createdAt','street','number','city','postalCode','country','ownerId']);

export default AddressScalarFieldEnumSchema;

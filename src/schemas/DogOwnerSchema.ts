import { z } from 'zod';

export const dogOwnerFormSchema = z.object({
  dogOwnerId: z.number().optional(),
  name: z.string().min(1),
  email: z.string().email('Must be a valid email address'),
  sex: z.string().optional(),
});

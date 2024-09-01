import { z } from 'zod';

export const DogOwnerFormSchema = z.object({
  dogOwnerId: z.number().optional(),
  name: z.string().min(1),
  email: z.string().email('Must be a valid email address'),
  image: z.string().optional(),
  sex: z.string().optional(),
});

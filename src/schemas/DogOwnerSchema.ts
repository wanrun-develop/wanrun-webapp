import { z } from 'zod';

export const DogOwnerFormSchema = z.object({
  dogOwnerId: z.number().optional(),
  name: z.string(),
  email: z.string(),
  image: z.string().optional(),
  sex: z.string().optional(),
});

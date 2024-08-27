import { z } from 'zod';
import { DogOwnerFormSchema } from './DogOwnerSchema';

export const authDogOwnerFormSchema = z.object({
  authDogOwnerId: z.number().optional(),
  password: z.string().min(6),
  grantType: z.string(),
  dogOwner: DogOwnerFormSchema,
});

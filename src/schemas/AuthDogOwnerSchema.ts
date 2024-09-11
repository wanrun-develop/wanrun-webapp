import { z } from 'zod';

export const signupDogOwnerFormSchema = z.object({
  authDogOwnerId: z.number().optional(),
  email: z.string().email(),
  password: z.string().min(6),
  dogOwnerName: z.string(),
});

export const loginDogOwnerFormSchema = signupDogOwnerFormSchema.extend({
  dogOwnerName: z.string().optional(),
});

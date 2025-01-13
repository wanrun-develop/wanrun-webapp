import { z } from 'zod';

export const signupDogOwnerFormSchema = z.object({
  email: z.string().email().optional(),
  phoneNumber: z.string().optional(),
  password: z.string().min(6),
  dogOwnerName: z.string(),
});

export const loginDogOwnerFormSchema = signupDogOwnerFormSchema.extend({
  dogOwnerName: z.string().optional(),
});

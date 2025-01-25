import { z } from 'zod';

export const signupDogOwnerFormSchema = z.object({
  email: z.string(),
  phoneNumber: z.string(),
  password: z.string(),
  dogOwnerName: z.string(),
});

export const loginDogOwnerFormSchema = z.object({
  email: z.string(),
  phoneNumber: z.string(),
  password: z.string(),
});

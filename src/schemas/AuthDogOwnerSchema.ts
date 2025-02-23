import { z } from 'zod';

export const signupDogOwnerFormSchema = z.object({
  email: z.string().optional(),
  phoneNumber: z.string().optional(),
  password: z.string(),
  dogOwnerName: z.string(),
});

export const loginDogOwnerFormSchema = z.object({
  email: z.string().optional(),
  phoneNumber: z.string().optional(),
  password: z.string(),
  authenticationType: z.enum(['password', 'refresh']),
});

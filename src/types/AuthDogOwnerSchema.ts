import {
  signupDogOwnerFormSchema,
  loginDogOwnerFormSchema,
} from '@/schemas/AuthDogOwnerSchema';
import { z } from 'zod';

export type SignupDogOwnerFormType = z.infer<typeof signupDogOwnerFormSchema>;

export type LoginDogOwnerFormType = z.infer<typeof loginDogOwnerFormSchema>;

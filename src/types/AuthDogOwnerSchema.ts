import { authDogOwnerFormSchema } from '@/schemas/AuthDogOwnerSchema';
import { z } from 'zod';

export type AuthDogOwnerFormType = z.infer<typeof authDogOwnerFormSchema>;

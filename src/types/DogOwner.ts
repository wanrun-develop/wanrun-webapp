import { dogOwnerFormSchema } from '@/schemas/DogOwnerSchema';
import { z } from 'zod';

export type DogOwnerFormType = z.infer<typeof dogOwnerFormSchema>;

import { DogFormSchema, DogSchema } from '@/schemas/DogSchema';
import { z } from 'zod';

export type Dog = z.infer<typeof DogSchema>;
export type DogFormType = z.infer<typeof DogFormSchema>;

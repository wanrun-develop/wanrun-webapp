import { dogFormSchema, dogSchema } from '@/schemas/DogSchema';
import { z } from 'zod';

export type Dog = z.infer<typeof dogSchema>;
export type DogFormType = z.infer<typeof dogFormSchema>;
export type DogApiRequestType = z.infer<typeof dogSchema>;

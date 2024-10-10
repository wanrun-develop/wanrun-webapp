import {
  addressSchema,
  businessHourSchema,
  dogrunSchema,
  locationSchema,
  tagSchema,
} from '@/schemas/DogrunSchema';
import { z } from 'zod';

export type Dogrun = z.infer<typeof dogrunSchema>;
export type Location = z.infer<typeof locationSchema>;
export type Tag = z.infer<typeof tagSchema>;
export type BusinessHour = z.infer<typeof businessHourSchema>;
export type Address = z.infer<typeof addressSchema>;

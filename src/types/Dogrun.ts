import {
  addressSchema,
  businessHourSchema,
  dogrunListItemSchema,
  dogrunSchema,
  locationSchema,
  photoSchema,
} from '@/schemas/DogrunSchema';
import { z } from 'zod';

export type Dogrun = z.infer<typeof dogrunSchema>;
export type DogrunListItem = z.infer<typeof dogrunListItemSchema>;
export type Location = z.infer<typeof locationSchema>;
export type BusinessHour = z.infer<typeof businessHourSchema>;
export type Address = z.infer<typeof addressSchema>;
export type Photo = z.infer<typeof photoSchema>;

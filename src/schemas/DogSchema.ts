import { z } from 'zod';

export const dogSchema = z.object({
  id: z.number(),
  name: z.string(),
  dogTypeId: z.number(),
  dogOwnerId: z.number(),
  weight: z.number(),
  sex: z.string(),
  image: z.custom<File>().optional(),
});

export const dogFormSchema = z.object({
  dogId: z.number().optional(),
  name: z.string(),
  dogTypeId: z.number(),
  weight: z.number(),
  sex: z.string(),
  image: z.custom<File>().optional(),
});

export const dogApiRequestSchema = dogFormSchema.extend({
  dogOwnerId: z.string(),
});

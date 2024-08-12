import { z } from 'zod';

export const DogSchema = z.object({
  id: z.number(),
  name: z.string(),
  dogTypeId: z.number(),
  dogOwnerId: z.number(),
  weight: z.number(),
  sex: z.string(),
  image: z.string().nullable(),
});

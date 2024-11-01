import { z } from 'zod';

export const locationSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
});

export const tagSchema = z.object({
  id: z.number(),
  dogrunId: z.number(),
  name: z.string(),
  description: z.string(),
});

export const addressSchema = z.object({
  postCode: z.string(),
  address: z.string(),
});

export const dayBusinessTimeSchema = z.object({
  openTime: z.string(),
  closeTime: z.string(),
  isAllDay: z.boolean(),
  isHoliday: z.boolean(),
});

export const regularBusinessHourSchema = z.object({
  sunday: dayBusinessTimeSchema,
  monday: dayBusinessTimeSchema,
  tuesday: dayBusinessTimeSchema,
  wednesday: dayBusinessTimeSchema,
  thursday: dayBusinessTimeSchema,
  friday: dayBusinessTimeSchema,
  saturday: dayBusinessTimeSchema,
});

export const specialBusinessHourSchema = z.object({
  date: z.string(),
  businessTime: dayBusinessTimeSchema,
});

export const businessHourSchema = z.object({
  regular: regularBusinessHourSchema,
  special: specialBusinessHourSchema.array(),
});

export const photoSchema = z.object({
  photoKey: z.string(),
  widthPx: z.number(),
  heightPx: z.number(),
});

export const dogrunSchema = z.object({
  dogrunId: z.string(),
  placeId: z.string(),
  name: z.string(),
  photos: z.array(photoSchema),
  location: locationSchema,
  businessStatus: z.string(),
  nowOpen: z.boolean(),
  businessDay: z.number(),
  businessHour: businessHourSchema,
  holiday: z.number(),
  openTime: z.string(),
  closeTime: z.string(),
  googleRating: z.number(),
  userRatingCount: z.number(),
  dogrunTags: tagSchema,
});

import { z } from 'zod';

export const locationSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
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
  address: addressSchema,
  location: locationSchema,
  businessStatus: z.string(),
  nowOpen: z.boolean(),
  businessHour: businessHourSchema,
  description: z.string(),
  googleRating: z.number(),
  userRatingCount: z.number(),
  dogrunTagId: z.number().array(),
  businessDay: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

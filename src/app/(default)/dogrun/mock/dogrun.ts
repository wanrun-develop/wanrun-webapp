import { Dogrun } from '@/types/Dogrun';

export const mockDogruns: Dogrun[] = [
  {
    id: 1,
    name: 'Sunny Dog Park',
    image: 'https://placedog.net/400/311?id=14',
    location: {
      latitude: 35.6895,
      longitude: 139.6917,
    },
    businessStatus: 'Open',
    nowOpen: true,
    businessDay: 1,
    businessHour: {
      regular: {
        sunday: {
          openTime: '08:00',
          closeTime: '18:00',
          isAllDay: false,
          isHoliday: false,
        },
        monday: {
          openTime: '09:00',
          closeTime: '17:00',
          isAllDay: false,
          isHoliday: false,
        },
        tuesday: {
          openTime: '09:00',
          closeTime: '17:00',
          isAllDay: false,
          isHoliday: false,
        },
        wednesday: {
          openTime: '09:00',
          closeTime: '17:00',
          isAllDay: false,
          isHoliday: true,
        },
        thursday: {
          openTime: '09:00',
          closeTime: '17:00',
          isAllDay: false,
          isHoliday: false,
        },
        friday: {
          openTime: '09:00',
          closeTime: '17:00',
          isAllDay: false,
          isHoliday: false,
        },
        saturday: {
          openTime: '08:00',
          closeTime: '18:00',
          isAllDay: false,
          isHoliday: false,
        },
      },
      special: [
        {
          date: '2024-10-01',
          businessTime: {
            openTime: '10:00',
            closeTime: '16:00',
            isAllDay: false,
            isHoliday: true,
          },
        },
      ],
    },
    holiday: 0,
    openTime: '09:00',
    closeTime: '17:00',
    googleRating: 4.5,
    userRatingCount: 150,
    dogrunTags: {
      id: 1,
      dogrunId: 1,
      name: 'Large Area',
      description: 'A spacious area for large dogs to run freely.',
    },
  },
  {
    id: 2,
    name: 'Riverside Dog Park',
    image: 'https://placedog.net/400/373?id=233',
    location: {
      latitude: 34.6937,
      longitude: 135.5023,
    },
    businessStatus: 'Closed',
    nowOpen: false,
    businessDay: 0,
    businessHour: {
      regular: {
        sunday: {
          openTime: '08:00',
          closeTime: '18:00',
          isAllDay: false,
          isHoliday: false,
        },
        monday: {
          openTime: '09:00',
          closeTime: '17:00',
          isAllDay: false,
          isHoliday: false,
        },
        tuesday: {
          openTime: '09:00',
          closeTime: '17:00',
          isAllDay: false,
          isHoliday: false,
        },
        wednesday: {
          openTime: '09:00',
          closeTime: '17:00',
          isAllDay: false,
          isHoliday: true,
        },
        thursday: {
          openTime: '09:00',
          closeTime: '17:00',
          isAllDay: false,
          isHoliday: false,
        },
        friday: {
          openTime: '09:00',
          closeTime: '17:00',
          isAllDay: false,
          isHoliday: false,
        },
        saturday: {
          openTime: '08:00',
          closeTime: '18:00',
          isAllDay: false,
          isHoliday: false,
        },
      },
      special: [
        {
          date: '2024-12-25',
          businessTime: {
            openTime: '10:00',
            closeTime: '15:00',
            isAllDay: false,
            isHoliday: true,
          },
        },
      ],
    },
    holiday: 2,
    openTime: '09:00',
    closeTime: '17:00',
    googleRating: 4.2,
    userRatingCount: 80,
    dogrunTags: {
      id: 2,
      dogrunId: 2,
      name: 'River Access',
      description: 'A dog park near the river with water play area.',
    },
  },
  {
    id: 3,
    name: 'Riverside Dog Park',
    image: 'https://placedog.net/400/373?id=233',
    location: {
      latitude: 34.3937,
      longitude: 135.2023,
    },
    businessStatus: 'Closed',
    nowOpen: false,
    businessDay: 0,
    businessHour: {
      regular: {
        sunday: {
          openTime: '08:00',
          closeTime: '18:00',
          isAllDay: false,
          isHoliday: false,
        },
        monday: {
          openTime: '09:00',
          closeTime: '17:00',
          isAllDay: false,
          isHoliday: false,
        },
        tuesday: {
          openTime: '09:00',
          closeTime: '17:00',
          isAllDay: false,
          isHoliday: false,
        },
        wednesday: {
          openTime: '09:00',
          closeTime: '17:00',
          isAllDay: false,
          isHoliday: true,
        },
        thursday: {
          openTime: '09:00',
          closeTime: '17:00',
          isAllDay: false,
          isHoliday: false,
        },
        friday: {
          openTime: '09:00',
          closeTime: '17:00',
          isAllDay: false,
          isHoliday: false,
        },
        saturday: {
          openTime: '08:00',
          closeTime: '18:00',
          isAllDay: false,
          isHoliday: false,
        },
      },
      special: [
        {
          date: '2024-12-25',
          businessTime: {
            openTime: '10:00',
            closeTime: '15:00',
            isAllDay: false,
            isHoliday: true,
          },
        },
      ],
    },
    holiday: 2,
    openTime: '09:00',
    closeTime: '17:00',
    googleRating: 4.2,
    userRatingCount: 80,
    dogrunTags: {
      id: 2,
      dogrunId: 2,
      name: 'River Access',
      description: 'A dog park near the river with water play area.',
    },
  },
  {
    id: 4,
    name: 'Riverside Dog Park',
    image: 'https://placedog.net/400/373?id=233',
    location: {
      latitude: 33.8937,
      longitude: 135.4023,
    },
    businessStatus: 'Closed',
    nowOpen: false,
    businessDay: 0,
    businessHour: {
      regular: {
        sunday: {
          openTime: '08:00',
          closeTime: '18:00',
          isAllDay: false,
          isHoliday: false,
        },
        monday: {
          openTime: '09:00',
          closeTime: '17:00',
          isAllDay: false,
          isHoliday: false,
        },
        tuesday: {
          openTime: '09:00',
          closeTime: '17:00',
          isAllDay: false,
          isHoliday: false,
        },
        wednesday: {
          openTime: '09:00',
          closeTime: '17:00',
          isAllDay: false,
          isHoliday: true,
        },
        thursday: {
          openTime: '09:00',
          closeTime: '17:00',
          isAllDay: false,
          isHoliday: false,
        },
        friday: {
          openTime: '09:00',
          closeTime: '17:00',
          isAllDay: false,
          isHoliday: false,
        },
        saturday: {
          openTime: '08:00',
          closeTime: '18:00',
          isAllDay: false,
          isHoliday: false,
        },
      },
      special: [
        {
          date: '2024-12-25',
          businessTime: {
            openTime: '10:00',
            closeTime: '15:00',
            isAllDay: false,
            isHoliday: true,
          },
        },
      ],
    },
    holiday: 2,
    openTime: '09:00',
    closeTime: '17:00',
    googleRating: 4.2,
    userRatingCount: 80,
    dogrunTags: {
      id: 2,
      dogrunId: 2,
      name: 'River Access',
      description: 'A dog park near the river with water play area.',
    },
  },
  {
    id: 5,
    name: 'Riverside Dog Park',
    image: 'https://placedog.net/400/373?id=233',
    location: {
      latitude: 34.9937,
      longitude: 135.2023,
    },
    businessStatus: 'Closed',
    nowOpen: false,
    businessDay: 0,
    businessHour: {
      regular: {
        sunday: {
          openTime: '08:00',
          closeTime: '18:00',
          isAllDay: false,
          isHoliday: false,
        },
        monday: {
          openTime: '09:00',
          closeTime: '17:00',
          isAllDay: false,
          isHoliday: false,
        },
        tuesday: {
          openTime: '09:00',
          closeTime: '17:00',
          isAllDay: false,
          isHoliday: false,
        },
        wednesday: {
          openTime: '09:00',
          closeTime: '17:00',
          isAllDay: false,
          isHoliday: true,
        },
        thursday: {
          openTime: '09:00',
          closeTime: '17:00',
          isAllDay: false,
          isHoliday: false,
        },
        friday: {
          openTime: '09:00',
          closeTime: '17:00',
          isAllDay: false,
          isHoliday: false,
        },
        saturday: {
          openTime: '08:00',
          closeTime: '18:00',
          isAllDay: false,
          isHoliday: false,
        },
      },
      special: [
        {
          date: '2024-12-25',
          businessTime: {
            openTime: '10:00',
            closeTime: '15:00',
            isAllDay: false,
            isHoliday: true,
          },
        },
      ],
    },
    holiday: 2,
    openTime: '09:00',
    closeTime: '17:00',
    googleRating: 4.2,
    userRatingCount: 80,
    dogrunTags: {
      id: 2,
      dogrunId: 2,
      name: 'River Access',
      description: 'A dog park near the river with water play area.',
    },
  },
];

export const mockDogrun: Dogrun = {
  dogrunId: 'dogrun_001',
  placeId: 'place_001',
  name: 'ワンワンパーク',
  address: {
    postCode: '100-0001',
    address: '東京都千代田区千代田1-1',
  },
  location: {
    latitude: 35.685175,
    longitude: 139.752799,
  },
  businessStatus: 'OPERATIONAL',
  nowOpen: true,
  businessHour: {
    regular: {
      sunday: {
        openTime: '08:00',
        closeTime: '18:00',
        isAllDay: false,
        isHoliday: false,
      },
      monday: {
        openTime: '08:00',
        closeTime: '18:00',
        isAllDay: false,
        isHoliday: false,
      },
      tuesday: {
        openTime: '08:00',
        closeTime: '18:00',
        isAllDay: false,
        isHoliday: false,
      },
      wednesday: {
        openTime: '08:00',
        closeTime: '18:00',
        isAllDay: false,
        isHoliday: false,
      },
      thursday: {
        openTime: '08:00',
        closeTime: '18:00',
        isAllDay: false,
        isHoliday: false,
      },
      friday: {
        openTime: '08:00',
        closeTime: '18:00',
        isAllDay: false,
        isHoliday: false,
      },
      saturday: {
        openTime: '08:00',
        closeTime: '18:00',
        isAllDay: false,
        isHoliday: false,
      },
    },
    special: [
      {
        date: '2025-12-31',
        businessTime: {
          openTime: '08:00',
          closeTime: '16:00',
          isAllDay: false,
          isHoliday: false,
        },
      },
    ],
  },
  description: '皇居周辺にあるドッグラン。緑が多く開放的な雰囲気です。',
  googleRating: 4.2,
  userRatingCount: 128,
  dogrunTagId: [1, 3],
  businessDay: 365,
  createdAt: '2025-01-01T10:00:00Z',
  updatedAt: '2025-01-10T10:00:00Z',
};

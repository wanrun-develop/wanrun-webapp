import { Dogrun } from '@/types/Dogrun';

const mockDogruns: Dogrun[] = [
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

export default mockDogruns;

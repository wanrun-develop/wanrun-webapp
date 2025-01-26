import { Dogrun, DogrunListItem } from '@/types/Dogrun';

export const mockDogrunListItems: DogrunListItem[] = [
  {
    dogrunId: 'dogrun-001',
    placeId: 'place-001',
    name: 'Shibuya Dog Park',
    address: {
      postCode: '150-0001',
      address: '東京都渋谷区渋谷1-1-1',
    },
    location: {
      latitude: 35.658034,
      longitude: 139.701636,
    },
    businessStatus: 'OPERATIONAL',
    nowOpen: true,
    toadyBusinessHour: {
      openTime: '09:00',
      closeTime: '18:00',
      isAllDay: false,
      isHoliday: false,
    },
    description: '渋谷駅から徒歩5分の便利なドッグランです。',
    googleRating: 4.2,
    userRatingCount: 120,
    dogrunTagId: [1, 3],
    photos: [
      {
        photoKey: 'shibuya-dogpark-photo1',
        widthPx: 640,
        heightPx: 480,
      },
    ],
    isBookmarked: false,
    isManaged: false,
  },
  {
    dogrunId: 'dogrun-002',
    placeId: 'place-002',
    name: 'Roppongi Hills Dog Lounge',
    address: {
      postCode: '106-6108',
      address: '東京都港区六本木6-10-1',
    },
    location: {
      latitude: 35.660355,
      longitude: 139.729286,
    },
    businessStatus: 'OPERATIONAL',
    nowOpen: false,
    toadyBusinessHour: {
      openTime: '10:00',
      closeTime: '20:00',
      isAllDay: false,
      isHoliday: false,
    },
    description: '六本木ヒルズ内にある屋内型のドッグランスペース。',
    googleRating: 4.6,
    userRatingCount: 98,
    dogrunTagId: [2],
    photos: [
      {
        photoKey: 'roppongi-doglounge-photo1',
        widthPx: 800,
        heightPx: 600,
      },
      {
        photoKey: 'roppongi-doglounge-photo2',
        widthPx: 1024,
        heightPx: 768,
      },
    ],
    isBookmarked: true,
    isManaged: true,
  },
  {
    dogrunId: 'dogrun-003',
    placeId: 'place-003',
    name: 'Yoyogi Dog Field',
    address: {
      postCode: '151-0052',
      address: '東京都渋谷区代々木神園町2-1',
    },
    location: {
      latitude: 35.671668,
      longitude: 139.694817,
    },
    businessStatus: 'OPERATIONAL',
    nowOpen: true,
    toadyBusinessHour: {
      openTime: '24時間',
      closeTime: '24時間',
      isAllDay: true,
      isHoliday: false,
    },
    description: '代々木公園内にある広々としたドッグランスペース。',
    googleRating: 4.0,
    userRatingCount: 200,
    dogrunTagId: [1, 4, 5],
    photos: [
      {
        photoKey: 'yoyogi-dogfield-photo1',
        widthPx: 640,
        heightPx: 480,
      },
    ],
    isBookmarked: false,
    isManaged: true,
  },
  {
    dogrunId: 'dogrun-004',
    placeId: 'place-004',
    name: 'Odaiba Seaside Dog Garden',
    address: {
      postCode: '135-0064',
      address: '東京都江東区青海1-1-10',
    },
    location: {
      latitude: 35.625928,
      longitude: 139.775148,
    },
    businessStatus: 'CLOSED_TEMPORARILY',
    nowOpen: false,
    toadyBusinessHour: {
      openTime: '09:00',
      closeTime: '17:00',
      isAllDay: false,
      isHoliday: true,
    },
    description: 'お台場海浜公園そばで海を見ながら遊べるドッグラン。',
    googleRating: 3.8,
    userRatingCount: 45,
    dogrunTagId: [],
    photos: [
      {
        photoKey: 'odaiba-doggarden-photo1',
        widthPx: 600,
        heightPx: 400,
      },
    ],
    isBookmarked: true,
    isManaged: false,
  },
  {
    dogrunId: 'dogrun-005',
    placeId: 'place-005',
    name: 'Tama River Dog Park',
    address: {
      postCode: '210-0007',
      address: '神奈川県川崎市川崎区駅前本町26-2',
    },
    location: {
      latitude: 35.530399,
      longitude: 139.702148,
    },
    businessStatus: 'OPERATIONAL',
    nowOpen: true,
    toadyBusinessHour: {
      openTime: '08:00',
      closeTime: '19:00',
      isAllDay: false,
      isHoliday: false,
    },
    description: '多摩川沿いの自然を楽しめるドッグラン。',
    googleRating: 4.1,
    userRatingCount: 62,
    dogrunTagId: [2, 3],
    photos: [
      {
        photoKey: 'tamariver-dogpark-photo1',
        widthPx: 720,
        heightPx: 540,
      },
    ],
    isBookmarked: false,
    isManaged: false,
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

import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { jwtDecode } from 'jwt-decode';

type JwtPayload = {
  userId: number;
  jti: string;
  role: number;
  exp: number;
};

const STORAGE_KEY = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
} as const;

const storageOptions = {
  getOnInit: true,
} as const;

export const accessTokenAtom = atomWithStorage<string | null>(
  STORAGE_KEY.ACCESS_TOKEN,
  null,
  undefined,
  storageOptions
);

export const refreshTokenAtom = atomWithStorage<string | null>(
  STORAGE_KEY.REFRESH_TOKEN,
  null,
  undefined,
  storageOptions
);

export const jwtPayloadAtom = atom((get) => {
  const jwt = get(accessTokenAtom);
  if (!jwt) return null;

  try {
    return jwtDecode<JwtPayload>(jwt);
  } catch {
    return null;
  }
});

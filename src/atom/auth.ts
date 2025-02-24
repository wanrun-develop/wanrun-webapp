import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { jwtDecode } from 'jwt-decode';

type JwtPayload = {
  userId: number;
  jti: string;
  role: number;
  exp: number;
};

export const accessTokenAtom = atomWithStorage<string | null>(
  'accessToken',
  null,
  undefined,
  {
    getOnInit: true,
  },
);

export const refreshTokenAtom = atomWithStorage<string | null>(
  'refreshToken',
  null,
  undefined,
  {
    getOnInit: true,
  },
);

export const jwtPayloadAtom = atom((get) => {
  const jwt = get(accessTokenAtom);
  if (!jwt) return null;

  try {
    const payload = jwtDecode<JwtPayload>(jwt);
    console.log('JWT Payload: ', payload);
    return payload;
  } catch (e) {
    console.log(e);
    return null;
  }
});

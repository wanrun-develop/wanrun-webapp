import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { jwtDecode } from 'jwt-decode';

type JwtPayload = {
  userId: string;
  jti: string;
  role: number;
  exp: number;
};

export const jwtAtom = atomWithStorage<string | null>('accessToken', null);

export const jwtPayloadAtom = atom((get) => {
  const jwt = get(jwtAtom);
  if (!jwt) return null;

  try {
    console.log('JWT: ', jwt);
    const payload = jwtDecode<JwtPayload>(jwt);
    console.log('JWT Payload: ', payload);
    return payload;
  } catch (e) {
    console.log(e);
    return null;
  }
});

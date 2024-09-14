import { useEffect, useState } from 'react';
import useStorage, { STORAGE_KEYS } from './useStorage';
import { jwtDecode } from 'jwt-decode';

type UserInfo = {
  id: string;
  exp: number;
};

const useUserInfo = () => {
  const { getValue: getAccessToken } = useStorage(
    STORAGE_KEYS.ACCESS_TOKEN,
    null,
  );
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    const accessToken = getAccessToken();
    if (!accessToken) {
      setUserInfo(null);
      return;
    }

    try {
      const decoded = jwtDecode<UserInfo>(accessToken);
      setUserInfo(decoded);
    } catch (e) {
      setUserInfo(null);
    }
  }, []);

  return { userInfo };
};

export default useUserInfo;

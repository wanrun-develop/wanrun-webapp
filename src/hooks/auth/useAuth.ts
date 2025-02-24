import { accessTokenAtom, refreshTokenAtom } from '@/atom/auth';
import { request } from '@/lib/apiClient';
import { useResetAtom } from 'jotai/utils';

const useAuth = () => {
  const resetAccessToken = useResetAtom(accessTokenAtom);
  const resetRefreshToken = useResetAtom(refreshTokenAtom);

  const logout = async () => {
    try {
      await request('POST', '/auth/dogowner/revoke');
      resetAccessToken();
      resetRefreshToken();
    } catch (e) {
      throw e;
    }
  };

  return { logout };
};
export default useAuth;

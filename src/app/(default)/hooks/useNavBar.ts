import useWindowSize from '@/utils/hooks/useWindowSize';
import { useCallback, useEffect, useState } from 'react';

const useNavBar = () => {
  const [open, setOpen] = useState(false);
  const windowSettingConfig = useWindowSize();

  useEffect(() => {
    if (windowSettingConfig.windowSize === 'sm') {
      setOpen(false);
    }
  }, [windowSettingConfig.windowSize]);

  const toggleNavBar = useCallback(() => setOpen(!open), [open]);

  return { open, toggleNavBar };
};

export default useNavBar;

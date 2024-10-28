import { useEffect, useState } from 'react';

export type WindowSize = 'xl' | 'lg' | 'md' | 'sm';

export type WindowSizeConfig = {
  width: number;
  height: number;
  windowSize: WindowSize;
};

const useWindowSize = (): WindowSizeConfig => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [windowSize, setWindowSize] = useState<WindowSize>('sm');

  const calculateWindowSize = (width: number): WindowSize => {
    if (width >= 1280) {
      return 'xl';
    } else if (width >= 1024) {
      return 'lg';
    } else if (width >= 768) {
      return 'md';
    } else {
      return 'sm';
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setWidth(width);
      setHeight(height);

      const windowSize = calculateWindowSize(width);
      setWindowSize(windowSize);
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { windowSize, width, height };
};

export default useWindowSize;

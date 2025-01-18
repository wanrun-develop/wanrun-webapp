'use client';

import CustomMap from './components/CustomMap';
import useSearchDogrun from './hooks/useSearchDogrun';
import { useCallback, useRef, useState } from 'react';
import BottomNavigation from '@/components/layout/ButtomNavigation';
import DogrunSearchHeader from '@/components/dogrun/DogrunSearchHeader';
import DogrunList from '@/components/dogrun/DogrunList';
import DogrunBottomSheet from '@/components/dogrun/DogrunBottomSheet';
import DogrunSearchList from '@/components/dogrun/DogrunSearchList';

const Dogrun = () => {
  const [bounds, setBounds] = useState<google.maps.LatLngBounds | undefined>(
    undefined,
  );
  const { dogruns, search, loading } = useSearchDogrun();

  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePositionChange = (bounds: google.maps.LatLngBounds) =>
    setBounds(bounds);

  const searchDogruns = useCallback(() => {
    if (!bounds) return;

    const sw = bounds.getSouthWest();
    const ne = bounds.getNorthEast();
    search({
      target: {
        northeast: { latitude: ne.lat(), longitude: ne.lng() },
        southwest: { latitude: sw.lat(), longitude: sw.lng() },
      },
    });
  }, [bounds, search]);

  return (
    <div className="w-full h-full flex flex-col overflow-y-hidden">
      <DogrunSearchHeader searchDogrun={() => setOpen(!open)} />
      <div
        className="flex-1 relative z-10 overflow-y-hidden"
        ref={containerRef}
      >
        <CustomMap dogruns={dogruns} onPositionChange={handlePositionChange} />
        <div className="absolute h-full overflow-y-scroll top-0 left-0 hidden sm:block">
          <DogrunSearchList
            dogruns={dogruns}
            searchDogrun={searchDogruns}
            searching={loading}
          />
        </div>

        <div className="sm:hidden">
          <DogrunBottomSheet open={open} containerRef={containerRef}>
            <div className="h-full overflow-y-scroll">
              <DogrunList dogruns={dogruns} />
            </div>
          </DogrunBottomSheet>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Dogrun;

'use client';

import CustomMap from './components/CustomMap';
import useSearchDogrun from './hooks/useSearchDogrun';
import { useCallback, useState } from 'react';
import DogrunList from '../../../components/dogrun/DogrunList';
import BottomNavigation from '@/components/layout/ButtomNavigation';
import DogrunSearchHeader from '@/components/dogrun/DogrunSearchHeader';

const Dogrun = () => {
  const [bounds, setBounds] = useState<google.maps.LatLngBounds | undefined>(
    undefined,
  );
  const { dogruns, search, loading } = useSearchDogrun();

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
    <div className="w-full h-full flex flex-col">
      <DogrunSearchHeader />
      <div className="flex-1 relative">
        <CustomMap dogruns={dogruns} onPositionChange={handlePositionChange} />
        <div className="absolute h-full overflow-y-scroll top-0 left-0 hidden sm:block">
          <DogrunList
            dogruns={dogruns}
            searchDogrun={searchDogruns}
            searching={loading}
          />
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Dogrun;

'use client';

import CustomMap from './components/CustomMap';
import useSearchDogrun from './hooks/useSearchDogrun';
import { useCallback, useState } from 'react';
import DogrunSearchHeader from '@/components/dogrun/DogrunSearchHeader';
import DogrunList from '@/components/dogrun/DogrunList';
import DogrunSearchList from '@/components/dogrun/DogrunSearchList';
import { Button } from '@/components/ui/button';
import { ListIcon, MapIcon } from 'lucide-react';

const Dogrun = () => {
  const [bounds, setBounds] = useState<google.maps.LatLngBounds | undefined>(
    undefined,
  );
  const { dogruns, search, loading } = useSearchDogrun();

  const [open, setOpen] = useState(false);

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
      <div className="relative sm:flex flex-1 overflow-y-hidden">
        <div className="h-full w-1/2 overflow-y-scroll hidden sm:block">
          <DogrunSearchList
            dogruns={dogruns}
            searchDogrun={searchDogruns}
            searching={loading}
          />
        </div>
        <CustomMap dogruns={dogruns} onPositionChange={handlePositionChange} />

        <div
          className={`w-full h-full top-0 left-0 absolute sm:hidden ${open ? '' : '-translate-x-full'}`}
        >
          <div className="h-full overflow-y-scroll">
            <DogrunList dogruns={dogruns} />
          </div>
        </div>

        <div className="absolute bottom-10 right-10 rounded-full sm:hidden bg-green-300">
          <Button
            variant="outline"
            size="circle-lg"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <MapIcon className="w-6 h-6" />
            ) : (
              <ListIcon className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dogrun;

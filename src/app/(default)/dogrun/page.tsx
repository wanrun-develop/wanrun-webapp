'use client';

import CustomMap from './components/CustomMap';
import useSearchDogrun from '../../../hooks/dogrun/useSearchDogrun';
import { TouchEvent, useCallback, useEffect, useRef, useState } from 'react';
import DogrunSearchHeader from '@/components/dogrun/DogrunSearchHeader';
import DogrunList from '@/components/dogrun/DogrunList';
import DogrunSearchList from '@/components/dogrun/DogrunSearchList';
import { Button } from '@/components/ui/button';
import { ListIcon, MapIcon } from 'lucide-react';

const handleHeight = 50;

const Dogrun = () => {
  const [bounds, setBounds] = useState<google.maps.LatLngBounds | undefined>(
    undefined,
  );
  const { dogruns, search, loading } = useSearchDogrun();

  const [open, setOpen] = useState(false);

  const [translateY, setTranslateY] = useState<number>(0);
  const baseHandleY = useRef<number>(0);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      const mapRect = mapRef.current.getBoundingClientRect();
      setTranslateY(mapRect.height - handleHeight);
    }
  }, []);

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

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const targetTouchies = e.targetTouches[0];
    const clientY = targetTouchies.clientY;
    baseHandleY.current = clientY;
    if (mapRef.current) {
      const mapRect = mapRef.current.getBoundingClientRect();
      setTranslateY(clientY - mapRect.top);
    }
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const targetTouchies = e.targetTouches[0];
    const clientY = targetTouchies.clientY;
    if (mapRef.current) {
      const mapRect = mapRef.current?.getBoundingClientRect();
      if (clientY < mapRect.top) {
        setTranslateY(0);
      } else if (clientY > mapRect.bottom) {
        setTranslateY(mapRect.bottom);
      } else {
        setTranslateY(clientY - mapRect.top);
      }
    }
  };

  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    const changedTouch = e.changedTouches[0];
    const clientY = changedTouch.clientY;
    if (mapRef.current) {
      const mapRect = mapRef.current.getBoundingClientRect();
      if (clientY - baseHandleY.current > 0) {
        setTranslateY(mapRect.height - handleHeight);
      } else {
        setTranslateY(0);
      }
    }
  };

  return (
    <div className="w-full h-full flex flex-col overflow-y-hidden">
      <DogrunSearchHeader searchDogrun={() => setOpen(!open)} />
      <div ref={mapRef} className="relative sm:flex flex-1 overflow-y-hidden">
        <div className="h-full w-1/2 overflow-y-scroll hidden sm:block">
          <DogrunSearchList
            dogruns={dogruns}
            searchDogrun={searchDogruns}
            searching={loading}
          />
        </div>
        <CustomMap dogruns={dogruns} onPositionChange={handlePositionChange} />

        <div
          // className={`w-full h-1/2 ${moving ? `translate-y-[${clientY}px]` : 'translate-y-0'} absolute bottom-0 bg-red-500`}
          className={`w-full h-full absolute bottom-0 bg-slate-100 duration-300 ease-out`}
          style={{
            // transform: `translateY()`,
            transform: `translateY(${translateY}px)`,
          }}
        >
          <div
            className={`hover:cursor-grab flex items-center`}
            style={{ height: `${handleHeight}px` }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="w-36 mx-auto border-2 border-gray-400 rounded-sm" />
          </div>
          <div>clientY is {translateY} px</div>
        </div>

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

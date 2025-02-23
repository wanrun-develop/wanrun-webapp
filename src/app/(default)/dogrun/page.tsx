'use client';

import CustomMap from './components/CustomMap';
import useSearchDogrun from '../../../hooks/dogrun/useSearchDogrun';
import { PointerEvent, useCallback, useEffect, useRef, useState } from 'react';
import DogrunSearchHeader from '@/components/dogrun/DogrunSearchHeader';
import DogrunList from '@/components/dogrun/DogrunList';
import DogrunSearchList from '@/components/dogrun/DogrunSearchList';
import useDogrunTag from '@/hooks/dogrun/useDogrunTag';

const handleHeight = 50;

const categories = [{ id: -1, label: 'お気に入り' }];

const Dogrun = () => {
  const [bounds, setBounds] = useState<google.maps.LatLngBounds | undefined>(
    undefined,
  );
  const { dogruns, search, loading } = useSearchDogrun();
  const [selectedTags, setSelectedTags] = useState<number[]>([]);

  const { dogrunTags, loading: loadingTag } = useDogrunTag();

  const [translateY, setTranslateY] = useState<number>(1000);
  const baseHandleY = useRef<number>(0);
  const mapRef = useRef<HTMLDivElement>(null);
  const bottomSheetRef = useRef<HTMLDivElement>(null);
  const moving = useRef(false);

  useEffect(() => {
    if (mapRef.current && !loadingTag) {
      const mapRect = mapRef.current.getBoundingClientRect();
      setTranslateY(mapRect.height - handleHeight);
    }
  }, [mapRef, loadingTag]);

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

  const handleClickSearch = () => {
    searchDogruns();
  };

  const toggleTag = (tagId: number) => {
    setSelectedTags((prev) =>
      prev.includes(tagId)
        ? prev.filter((id) => id !== tagId)
        : [...prev, tagId],
    );
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    console.log(e.clientY, e.nativeEvent.clientY);
    bottomSheetRef.current?.setPointerCapture(e.pointerId);
    moving.current = true;
    const clientY = e.clientY;
    baseHandleY.current = clientY;
    if (mapRef.current) {
      const mapRect = mapRef.current.getBoundingClientRect();
      setTranslateY(clientY - mapRect.top);
    }
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!moving.current) return;

    const clientY = e.clientY;
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

  const onPointUp = (e: PointerEvent<HTMLDivElement>) => {
    moving.current = false;
    const clientY = e.clientY;
    bottomSheetRef.current?.releasePointerCapture(e.pointerId);
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
      <DogrunSearchHeader
        searching={loading}
        tags={dogrunTags}
        selectedTags={selectedTags}
        loadingTag={loadingTag}
        searchDogrun={handleClickSearch}
        toggleTag={toggleTag}
      />
      <div ref={mapRef} className="relative sm:flex flex-1 overflow-y-hidden">
        <div className="h-full w-2/3 overflow-y-scroll hidden sm:block">
          <DogrunSearchList
            dogruns={dogruns}
            searchDogrun={searchDogruns}
            searching={loading}
            tags={dogrunTags}
            selectedTags={selectedTags}
            toggleTag={toggleTag}
          />
        </div>
        <CustomMap dogruns={dogruns} onPositionChange={handlePositionChange} />

        <div
          className={`w-full h-full absolute bottom-0 flex flex-col bg-white duration-300 ease-out sm:hidden`}
          style={{
            transform: `translateY(${translateY}px)`,
          }}
        >
          <div
            className="hover:cursor-grab flex items-center touch-none"
            style={{ height: `${handleHeight}px` }}
            ref={bottomSheetRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointUp}
          >
            <div className="w-36 mx-auto border-2 border-gray-400 rounded-sm" />
          </div>
          <div className="px-6 flex-1 overflow-y-scroll">
            <DogrunList dogruns={dogruns} />
          </div>
        </div>

        {/* <div
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
        </div> */}
      </div>
    </div>
  );
};

export default Dogrun;

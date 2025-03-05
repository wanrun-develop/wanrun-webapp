'use client';

import { useCallback, useRef, useState } from 'react';
import CustomMap from './components/CustomMap';
import useSearchDogrun from '@/hooks/dogrun/useSearchDogrun';
import DogrunSearchHeader from '@/components/dogrun/DogrunSearchHeader';
import DogrunSearchList from '@/components/dogrun/DogrunSearchList';
import useDogrunTag from '@/hooks/dogrun/useDogrunTag';
import useDogrunBookmark from '@/hooks/dogrun/useDogrunBookmark';
import { DogrunListItem } from '@/types/Dogrun';
import { useDogrunBottomSheet } from '@/hooks/dogrun/useDogrunBottomSheet';
import { DogrunBottomSheet } from '@/components/dogrun/DogrunBottomSheet';

const HANDLE_HEIGHT = 50;

const Dogrun = () => {
  const [bounds, setBounds] = useState<google.maps.LatLngBounds>();
  const { dogruns, search, loading, replaceDogrun } = useSearchDogrun();
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const { dogrunTags, loading: loadingTag } = useDogrunTag();
  const { toggleBookmark } = useDogrunBookmark();
  const mapRef = useRef<HTMLDivElement>(null);

  const { translateY, bottomSheetRef, pointerHandlers } = useDogrunBottomSheet({
    mapRef,
    handleHeight: HANDLE_HEIGHT,
  });

  const handlePositionChange = useCallback((bounds: google.maps.LatLngBounds) => {
    setBounds(bounds);
  }, []);

  const searchDogruns = useCallback(() => {
    if (!bounds) return;

    const sw = bounds.getSouthWest();
    const ne = bounds.getNorthEast();
    search({
      target: {
        northeast: { latitude: ne.lat(), longitude: ne.lng() },
        southwest: { latitude: sw.lat(), longitude: sw.lng() },
      },
      includeDogrunTags: selectedTags,
    });
  }, [bounds, selectedTags, search]);

  const toggleTag = useCallback((tagId: number) => {
    setSelectedTags((prev) =>
      prev.includes(tagId)
        ? prev.filter((id) => id !== tagId)
        : [...prev, tagId],
    );
  }, []);

  const handleBookmark = useCallback(async (dogrun: DogrunListItem) => {
    try {
      await toggleBookmark(dogrun);
      replaceDogrun(dogrun);
    } catch (e) {
      console.error('Failed to toggle bookmark:', e);
    }
  }, [toggleBookmark, replaceDogrun]);

  return (
    <div className="w-full h-full flex flex-col overflow-y-hidden">
      <DogrunSearchHeader
        searching={loading}
        tags={dogrunTags}
        selectedTags={selectedTags}
        loadingTag={loadingTag}
        searchDogrun={searchDogruns}
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
            handleBookmark={handleBookmark}
          />
        </div>
        <CustomMap 
          dogruns={dogruns} 
          onPositionChange={handlePositionChange} 
        />
        <DogrunBottomSheet
          translateY={translateY}
          handleHeight={HANDLE_HEIGHT}
          bottomSheetRef={bottomSheetRef}
          dogruns={dogruns}
          handleBookmark={handleBookmark}
          pointerHandlers={pointerHandlers}
        />
      </div>
    </div>
  );
};

export default Dogrun;

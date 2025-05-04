'use client';

import { Map, MapEvent } from '@vis.gl/react-google-maps';
import { DogrunListItem } from '@/types/Dogrun';
import { useCallback, useMemo, useState } from 'react';
import useGeolocation from '@/hooks/common/useGeolocation';
import MarkerCluster from './MarkerCluster';
import { Oval } from 'react-loader-spinner';
import DogrunInfoCard from './DogrunInfoCard';

const GOOGLE_MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAP_ID as string;

const defaultPosition = {
  lat: 35.6811673,
  lng: 139.7670516,
};

type Props = {
  dogruns: DogrunListItem[];
  onPositionChange: (bounds: google.maps.LatLngBounds) => void;
};

const CustomMap = (props: Props) => {
  const { dogruns, onPositionChange } = props;
  const [currentDogrunId, setCurrentDogrunId] = useState<number | undefined>(
    undefined,
  );

  const { location: initialPosition, loading } =
    useGeolocation(defaultPosition);

  const clickMap = useCallback(() => setCurrentDogrunId(undefined), []);

  const onIdle = (event: MapEvent) => {
    const bounds = event.map.getBounds();
    if (!bounds) return;

    onPositionChange(bounds);
  };

  const markerCluster = useMemo(() => {
    return (
      <MarkerCluster
        dogruns={dogruns}
        currentDogrunId={currentDogrunId}
        selectDogrunId={setCurrentDogrunId}
      />
    );
  }, [dogruns, currentDogrunId, setCurrentDogrunId]);

  const dogrunInfoCard = useMemo(() => {
    if (!currentDogrunId) return null;
    const dogrun = dogruns.find(
      (dogrun) => dogrun.dogrunId === currentDogrunId,
    );
    return dogrun ? <DogrunInfoCard dogrun={dogrun} /> : null;
  }, [dogruns, currentDogrunId]);

  return (
    <div className="h-full w-full flex flex-col relative">
      {loading ? (
        <div className="w-full h-full flex justify-center items-center flex-col bg-black bg-opacity-50">
          <Oval
            width={80}
            height={80}
            color="#76db73"
            secondaryColor="#a4e3a8"
          />
        </div>
      ) : (
        <>
          <Map
            defaultCenter={initialPosition}
            defaultZoom={14}
            mapId={GOOGLE_MAP_ID}
            disableDefaultUI
            onClick={clickMap}
            onIdle={onIdle}
          >
            {markerCluster}
          </Map>
          {dogrunInfoCard}
        </>
      )}
    </div>
  );
};

export default CustomMap;

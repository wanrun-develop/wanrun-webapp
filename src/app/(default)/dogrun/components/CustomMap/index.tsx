'use client';

import { Map, MapEvent } from '@vis.gl/react-google-maps';
import styles from './CustomMap.module.scss';
import CustomMarker from '../CustomMarker';
import { Dogrun } from '@/types/Dogrun';
import { useCallback, useState } from 'react';
import useGeolocation from '@/utils/hooks/useGeolocation';

const GOOGLE_MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAP_ID as string;

const defaultPosition = {
  lat: 35.6811673,
  lng: 139.7670516,
};

type Props = {
  dogruns: Dogrun[];
  onPositionChange: (bounds: google.maps.LatLngBounds) => void;
};

const CustomMap = (props: Props) => {
  const { dogruns, onPositionChange } = props;
  const [currentDogrunId, setCurrentDogrunId] = useState<string | undefined>(
    undefined,
  );

  const { location: currentPosition, loaded } = useGeolocation();
  const initialPosition = loaded ? currentPosition : defaultPosition;

  const clickMap = useCallback(() => setCurrentDogrunId(undefined), []);

  const onIdle = (event: MapEvent) => {
    const bounds = event.map.getBounds();
    if (!bounds) return;

    onPositionChange(bounds);
  };

  return (
    <div className={styles.container}>
      <Map
        defaultCenter={initialPosition}
        center={currentPosition}
        defaultZoom={14}
        mapId={GOOGLE_MAP_ID}
        disableDefaultUI
        onClick={clickMap}
        onIdle={onIdle}
      >
        {dogruns.map((dogrun, i) => (
          <CustomMarker
            key={`dogrun-marker${i}`}
            dogrun={dogrun}
            currentDogrunId={currentDogrunId}
            selectDogrunId={setCurrentDogrunId}
          />
        ))}
      </Map>
    </div>
  );
};

export default CustomMap;

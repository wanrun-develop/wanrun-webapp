'use client';

import { Map, MapEvent } from '@vis.gl/react-google-maps';
import styles from './CustomMap.module.scss';
import { DogrunListItem } from '@/types/Dogrun';
import { useCallback, useState } from 'react';
import useGeolocation from '@/app/hooks/common/useGeolocation';
import MarkerCluster from '../MarkerCluster';
import { Oval } from 'react-loader-spinner';

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
  const [currentDogrunId, setCurrentDogrunId] = useState<string | undefined>(
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

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <Oval
            width={80}
            height={80}
            color="#76db73"
            secondaryColor="#a4e3a8"
          />
        </div>
      ) : (
        <Map
          defaultCenter={initialPosition}
          defaultZoom={14}
          mapId={GOOGLE_MAP_ID}
          disableDefaultUI
          onClick={clickMap}
          onIdle={onIdle}
        >
          <MarkerCluster
            dogruns={dogruns}
            currentDogrunId={currentDogrunId}
            selectDogrunId={setCurrentDogrunId}
          />
        </Map>
      )}
    </div>
  );
};

export default CustomMap;

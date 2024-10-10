'use client';

import { Map } from '@vis.gl/react-google-maps';
import styles from './CustomMap.module.scss';
import CustomMarker from '../CustomMarker';
import { Dogrun } from '@/types/Dogrun';
import { useCallback, useState } from 'react';

const GOOGLE_MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAP_ID as string;

const position = {
  lat: 35.6811673,
  lng: 139.7670516,
};

type Props = {
  dogruns: Dogrun[];
};

const CustomMap = (props: Props) => {
  const { dogruns } = props;
  const [currentDogrunId, setCurrentDogrunId] = useState<number | undefined>(
    undefined,
  );

  const clickMap = useCallback(() => setCurrentDogrunId(undefined), []);

  return (
    <div className={styles.container}>
      <Map
        defaultCenter={position}
        defaultZoom={5}
        mapId={GOOGLE_MAP_ID}
        onClick={clickMap}
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

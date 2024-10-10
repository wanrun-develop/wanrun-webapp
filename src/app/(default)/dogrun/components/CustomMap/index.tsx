'use client';

import { Map } from '@vis.gl/react-google-maps';
import styles from './CustomMap.module.scss';
import CustomMarker from '../CustomMarker';
import { Dogrun } from '@/types/Dogrun';

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

  return (
    <div className={styles.container}>
      <Map defaultCenter={position} defaultZoom={5} mapId={GOOGLE_MAP_ID}>
        {dogruns.map((dogrun, i) => (
          <CustomMarker key={`dogrun-marker${i}`} dogrun={dogrun} />
        ))}
      </Map>
    </div>
  );
};

export default CustomMap;

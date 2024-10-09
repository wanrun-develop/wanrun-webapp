'use client';

import { Map } from '@vis.gl/react-google-maps';
import styles from './CustomMap.module.scss';
import CustomMarker from '../CustomMarker';
import { Dogrun } from '@/types/Dogrun';

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
      <Map defaultCenter={position} defaultZoom={14}>
        <CustomMarker
          lng={position.lng}
          lat={position.lat}
          title="dogrun_test"
          description="人気のドッグラン"
        />
        {dogruns.map((dogrun, i) => (
          <CustomMarker
            key={`dogrun-marker${i}`}
            lng={dogrun.location.longitude}
            lat={dogrun.location.latitude}
            title={dogrun.name}
            description="test"
          />
        ))}
      </Map>
    </div>
  );
};

export default CustomMap;

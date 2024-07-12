'use client';

import { Map } from '@vis.gl/react-google-maps';
import styles from './CustomMap.module.scss';
import CustomMarker from '../CustomMarker';

const position = {
  lat: 35.6811673,
  lng: 139.7670516,
};

const CustomMap = () => {
  return (
    <div className={styles.container}>
      <Map defaultCenter={position} defaultZoom={14}>
        <CustomMarker
          lng={position.lng}
          lat={position.lat}
          title="dogrun_test"
          description="人気のドッグラン"
        />
      </Map>
    </div>
  );
};

export default CustomMap;

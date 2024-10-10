import { Dogrun } from '@/types/Dogrun';
import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import styles from './CustomMarker.module.scss';

type Props = {
  dogrun: Dogrun;
};

const CustomMarker = (props: Props) => {
  const { dogrun } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [markerRef, marker] = useAdvancedMarkerRef();

  const openWindow = useCallback(() => setIsOpen(true), []);
  const closeWindow = useCallback(() => setIsOpen(false), []);

  const lng = dogrun.location.longitude;
  const lat = dogrun.location.latitude;

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={{ lng, lat }}
        onClick={openWindow}
      />
      {isOpen && (
        <InfoWindow onClose={closeWindow} anchor={marker}>
          <div className={styles.image}>
            <Image
              src={dogrun.image}
              alt={dogrun.name}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.description}>
            <h3>{dogrun.name}</h3>
            <p>description</p>
          </div>
        </InfoWindow>
      )}
    </>
  );
};

export default CustomMarker;

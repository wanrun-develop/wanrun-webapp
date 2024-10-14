import { Dogrun } from '@/types/Dogrun';
import {
  AdvancedMarker,
  InfoWindow,
  Pin,
  useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps';
import Image from 'next/image';
import { useCallback, useMemo } from 'react';
import styles from './CustomMarker.module.scss';

type Props = {
  dogrun: Dogrun;
  currentDogrunId: number | undefined;
  selectDogrunId: (dogrunId: number | undefined) => void;
};

const CustomMarker = (props: Props) => {
  const { dogrun, currentDogrunId, selectDogrunId } = props;
  const [markerRef, marker] = useAdvancedMarkerRef();

  const selected = useMemo(
    () => dogrun.id === currentDogrunId,
    [dogrun, currentDogrunId],
  );

  const clickMarker = useCallback(
    () => selectDogrunId(dogrun.id),
    [dogrun, selectDogrunId],
  );

  const closeWindow = useCallback(
    () => selectDogrunId(undefined),
    [selectDogrunId],
  );

  const lng = dogrun.location.longitude;
  const lat = dogrun.location.latitude;

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={{ lng, lat }}
        onClick={clickMarker}
      >
        <Pin
          background={selected ? '#ff6666' : '#66cc66'}
          borderColor={selected ? '#cc0000' : '#339933'}
          glyphColor={selected ? '#990000' : '#006600'}
        />
      </AdvancedMarker>
      {selected && (
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

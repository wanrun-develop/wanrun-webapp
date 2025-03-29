import { DogrunListItem } from '@/types/Dogrun';
import { AdvancedMarker, InfoWindow, Pin } from '@vis.gl/react-google-maps';
import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';
import usePhoto from '@/hooks/dogrun/usePhoto';
import NoImage from '@public/noimage.png';
import { Marker } from '@googlemaps/markerclusterer';

type Props = {
  dogrun: DogrunListItem;
  currentDogrunId: number | undefined;
  selectDogrunId: (dogrunId: number | undefined) => void;
  setMarkerRef: (marker: Marker | null, key: number) => void;
};

const CustomMarker = (props: Props) => {
  const { dogrun, currentDogrunId, selectDogrunId, setMarkerRef } = props;
  const [marker, setMarker] = useState<Marker | undefined>(undefined);

  const dogrunId = useMemo(() => dogrun.dogrunId, [dogrun]);

  const ref = useCallback(
    (marker: google.maps.marker.AdvancedMarkerElement) => {
      setMarkerRef(marker, dogrunId);
      setMarker(marker);
    },
    [dogrunId, setMarkerRef],
  );

  const photo = dogrun.photos?.[0];
  const imageUrl = usePhoto(photo);

  const selected = useMemo(
    () => dogrunId === currentDogrunId,
    [dogrunId, currentDogrunId],
  );

  const clickMarker = useCallback(
    () => selectDogrunId(dogrunId),
    [dogrunId, selectDogrunId],
  );

  const closeWindow = useCallback(
    () => selectDogrunId(undefined),
    [selectDogrunId],
  );

  const lng = dogrun.location.longitude;
  const lat = dogrun.location.latitude;

  return (
    <>
      <AdvancedMarker ref={ref} position={{ lng, lat }} onClick={clickMarker}>
        <Pin
          background={selected ? '#ff6666' : '#66cc66'}
          borderColor={selected ? '#cc0000' : '#339933'}
          glyphColor={selected ? '#990000' : '#006600'}
        />
      </AdvancedMarker>
      {selected && (
        <InfoWindow onClose={closeWindow} anchor={marker}>
          <div className="w-full h-[100px] relative">
            <Image
              src={imageUrl || NoImage}
              alt={dogrun.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="h-[50px]">
            <h3 className="font-bold text-sm">{dogrun.name}</h3>
            <p className="text-xs text-gray-600">description</p>
          </div>
        </InfoWindow>
      )}
    </>
  );
};

export default CustomMarker;

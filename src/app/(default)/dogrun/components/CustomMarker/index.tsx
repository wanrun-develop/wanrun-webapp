import { InfoWindow, Marker } from '@vis.gl/react-google-maps';
import { useCallback, useState } from 'react';

type Props = {
  lng: number;
  lat: number;
  title: string;
  description?: string;
};

const CustomMarker = (props: Props) => {
  const { lng, lat, title, description } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openWindow = useCallback(() => setIsOpen(true), []);
  const closeWindow = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <Marker position={{ lng, lat }} onClick={openWindow} />
      {isOpen && (
        <InfoWindow
          position={{ lng, lat: lat + 0.001 }}
          onCloseClick={closeWindow}
        >
          <h3>{title}</h3>
          <p>{description}</p>
        </InfoWindow>
      )}
    </>
  );
};

export default CustomMarker;

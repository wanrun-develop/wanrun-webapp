'use client';

import { Map } from '@vis.gl/react-google-maps';

const GOOGLE_MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAP_ID as string;

type Location = {
  latitude: number;
  longitude: number;
};

type Props = {
  defaultCenter: Location;
  location: Location;
  defaultZoom: number;
};

const CustomMap = (props: Props) => {
  const { defaultCenter, location, defaultZoom = 14 } = props;

  return (
    <Map
      defaultCenter={{
        lat: defaultCenter.latitude,
        lng: defaultCenter.longitude,
      }}
      defaultZoom={defaultZoom}
      mapId={GOOGLE_MAP_ID}
      disableDefaultUI
    />
  );
};

export default CustomMap;

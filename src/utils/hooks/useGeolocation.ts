import { useEffect, useState } from 'react';

type Geolocation = {
  lng: number;
  lat: number;
};

const options: PositionOptions = {
  enableHighAccuracy: true,
};

const useGeolocation = () => {
  const [location, setLocation] = useState<Geolocation | undefined>(undefined);
  const [loaded, setLoaded] = useState<boolean>(false);

  const onEvent: PositionCallback = (position) => {
    setLocation({
      lng: position.coords.longitude,
      lat: position.coords.latitude,
    });
    console.log(position.coords.longitude, position.coords.latitude);
    setLoaded(true);
  };

  const onEventError: PositionErrorCallback = (error) => {
    console.error(error);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onEvent, onEventError, options);
    const watchId = navigator.geolocation.watchPosition(
      onEvent,
      onEventError,
      options,
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return { location, loaded };
};

export default useGeolocation;

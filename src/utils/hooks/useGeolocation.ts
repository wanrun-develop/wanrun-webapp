import { useEffect, useState } from 'react';

type Geolocation = {
  lng: number;
  lat: number;
};

const options: PositionOptions = {
  enableHighAccuracy: true,
};

const useGeolocation = (defaultLocation?: Geolocation) => {
  const [location, setLocation] = useState<Geolocation | undefined>(
    defaultLocation,
  );
  const [loading, setLoading] = useState<boolean>(true);

  const onEvent: PositionCallback = (position) => {
    setLocation({
      lng: position.coords.longitude,
      lat: position.coords.latitude,
    });
    console.log(position.coords.longitude, position.coords.latitude);
    setLoading(false);
  };

  const onEventError: PositionErrorCallback = (error) => {
    console.error(error);
    setLoading(false);
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

  return { location, loading };
};

export default useGeolocation;

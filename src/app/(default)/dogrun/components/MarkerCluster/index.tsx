import { Dogrun } from '@/types/Dogrun';
import { Marker, MarkerClusterer } from '@googlemaps/markerclusterer';
import { useMap } from '@vis.gl/react-google-maps';
import { useCallback, useEffect, useMemo, useState } from 'react';
import CustomMarker from '../CustomMarker';

type Props = {
  dogruns: Dogrun[];
  currentDogrunId: string | undefined;
  selectDogrunId: (dogrunId: string | undefined) => void;
};

const MarkerCluster = (props: Props) => {
  const { dogruns, currentDogrunId, selectDogrunId } = props;
  const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});

  const map = useMap();
  const clusterer = useMemo(() => {
    if (!map) return;

    return new MarkerClusterer({ map });
  }, [map]);

  useEffect(() => {
    if (!clusterer) return;

    clusterer.clearMarkers();
    clusterer.addMarkers(Object.values(markers));
  }, [clusterer, markers]);

  const setMarkerRef = useCallback((marker: Marker | null, key: string) => {
    setMarkers((markers) => {
      if ((marker && markers[key]) || (!marker && !markers[key]))
        return markers;

      if (marker) {
        return { ...markers, [key]: marker };
      } else {
        const { [key]: _, ...newMarkers } = markers;
        return newMarkers;
      }
    });
  }, []);

  return (
    <>
      {dogruns.map((dogrun) => (
        <CustomMarker
          key={dogrun.dogrunId || dogrun.placeId}
          dogrun={dogrun}
          currentDogrunId={currentDogrunId}
          selectDogrunId={selectDogrunId}
          setMarkerRef={setMarkerRef}
        />
      ))}
    </>
  );
};

export default MarkerCluster;

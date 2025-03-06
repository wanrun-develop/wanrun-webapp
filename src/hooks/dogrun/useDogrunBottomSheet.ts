import { PointerEvent, useCallback, useEffect, useRef, useState } from 'react';

type UseDogrunBottomSheetProps = {
  mapRef: React.RefObject<HTMLDivElement>;
  handleHeight: number;
};

export const useDogrunBottomSheet = ({
  mapRef,
  handleHeight,
}: UseDogrunBottomSheetProps) => {
  const [translateY, setTranslateY] = useState<number>(1000);
  const baseHandleY = useRef<number>(0);
  const bottomSheetRef = useRef<HTMLDivElement>(null);
  const moving = useRef(false);

  useEffect(() => {
    if (!mapRef.current) return;

    const updateTranslateY = () => {
      const mapRect = mapRef.current?.getBoundingClientRect();
      if (mapRect) {
        setTranslateY(mapRect.height - handleHeight);
      }
    };

    // 初期位置の設定
    updateTranslateY();

    // ResizeObserverの設定
    const resizeObserver = new ResizeObserver(updateTranslateY);
    resizeObserver.observe(mapRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [mapRef, handleHeight]);

  const onPointerDown = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      bottomSheetRef.current?.setPointerCapture(e.pointerId);
      moving.current = true;
      baseHandleY.current = e.clientY;
      if (mapRef.current) {
        const mapRect = mapRef.current.getBoundingClientRect();
        setTranslateY(e.clientY - mapRect.top);
      }
    },
    [mapRef],
  );

  const onPointerMove = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      if (!moving.current || !mapRef.current) return;

      const mapRect = mapRef.current.getBoundingClientRect();
      const clientY = e.clientY;

      setTranslateY(
        Math.max(0, Math.min(clientY - mapRect.top, mapRect.bottom)),
      );
    },
    [mapRef],
  );

  const onPointerUp = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      moving.current = false;
      bottomSheetRef.current?.releasePointerCapture(e.pointerId);

      if (mapRef.current) {
        const mapRect = mapRef.current.getBoundingClientRect();
        setTranslateY(
          e.clientY - baseHandleY.current > 0
            ? mapRect.height - handleHeight
            : 0,
        );
      }
    },
    [handleHeight, mapRef],
  );

  return {
    translateY,
    bottomSheetRef,
    pointerHandlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp,
    },
  };
};

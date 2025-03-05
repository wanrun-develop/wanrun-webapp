import { PointerEvent } from 'react';
import DogrunList from './DogrunList';
import { DogrunListItem } from '@/types/Dogrun';

type DogrunBottomSheetProps = {
  translateY: number;
  handleHeight: number;
  bottomSheetRef: React.RefObject<HTMLDivElement>;
  dogruns: DogrunListItem[];
  handleBookmark: (dogrun: DogrunListItem) => Promise<void>;
  pointerHandlers: {
    onPointerDown: (e: PointerEvent<HTMLDivElement>) => void;
    onPointerMove: (e: PointerEvent<HTMLDivElement>) => void;
    onPointerUp: (e: PointerEvent<HTMLDivElement>) => void;
  };
};

export const DogrunBottomSheet = ({
  translateY,
  handleHeight,
  bottomSheetRef,
  dogruns,
  handleBookmark,
  pointerHandlers,
}: DogrunBottomSheetProps) => {
  const { onPointerDown, onPointerMove, onPointerUp } = pointerHandlers;

  return (
    <div
      className="w-full h-full absolute bottom-0 flex flex-col bg-white duration-300 ease-out sm:hidden"
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div
        className="hover:cursor-grab flex items-center touch-none"
        style={{ height: `${handleHeight}px` }}
        ref={bottomSheetRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        <div className="w-36 mx-auto border-2 border-gray-400 rounded-sm" />
      </div>
      <div className="px-6 flex-1 overflow-y-scroll">
        <DogrunList dogruns={dogruns} handleBookmark={handleBookmark} />
      </div>
    </div>
  );
};

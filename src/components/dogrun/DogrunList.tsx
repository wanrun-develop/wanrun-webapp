import { memo } from 'react';
import { DogrunListItem as Dogrun } from '@/types/Dogrun';
import DogrunListItem from './DogrunListItem';

type DogrunHandlerProps = {
  dogrun: Dogrun;
  handleBookmark: (dogrun: Dogrun) => void;
};

type DogrunListProps = {
  dogruns: Dogrun[];
  handleBookmark: (dogrun: Dogrun) => void;
};

const DogrunListItemWrapper = memo(
  ({ dogrun, handleBookmark }: DogrunHandlerProps) => (
    <div className="w-full lg:w-1/2 px-2 py-4">
      <DogrunListItem dogrun={dogrun} handleBookmark={handleBookmark} />
    </div>
  ),
);

DogrunListItemWrapper.displayName = 'DogrunListItemWrapper';

const DogrunList = memo(({ dogruns, handleBookmark }: DogrunListProps) => (
  <div className="w-full flex flex-wrap bg-white">
    {dogruns.map((dogrun) => (
      <DogrunListItemWrapper
        key={dogrun.dogrunId ?? dogrun.name}
        dogrun={dogrun}
        handleBookmark={handleBookmark}
      />
    ))}
  </div>
));

DogrunList.displayName = 'DogrunList';

export default DogrunList;

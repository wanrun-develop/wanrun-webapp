import { useMemo } from 'react';
import { DogrunListItem as Dogrun } from '@/types/Dogrun';
import DogrunListItem from './DogrunListItem';

type Props = {
  dogruns: Dogrun[];
};

const DogrunList = (props: Props) => {
  const { dogruns } = props;

  const dogrunItems = useMemo(
    () =>
      dogruns.map((dogrun, i) => (
        <div key={`dogrun-item${i}`} className="w-full lg:w-1/2 px-2 py-4">
          <DogrunListItem dogrun={dogrun} />
        </div>
      )),
    [dogruns],
  );

  return <div className="w-full flex flex-wrap bg-white">{dogrunItems}</div>;
};

export default DogrunList;

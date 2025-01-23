import { useMemo } from 'react';
import { Dogrun } from '@/types/Dogrun';
import DogrunListItem from './DogrunListItem';

type Props = {
  dogruns: Dogrun[];
};

const DogrunList = (props: Props) => {
  const { dogruns } = props;

  const dogrunItems = useMemo(
    () =>
      dogruns.map((dogrun, i) => (
        <div key={`dogrun-item${i}`} className="w-full lg:w-1/2">
          <DogrunListItem dogrun={dogrun} />
        </div>
      )),
    [dogruns],
  );

  return <div className="w-full flex flex-wrap bg-slate-50">{dogrunItems}</div>;
};

export default DogrunList;

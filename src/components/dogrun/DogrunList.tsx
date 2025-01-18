import { useMemo } from 'react';
import { Dogrun } from '@/types/Dogrun';
import DogrunListItem from '@/components/dogrun/DogrunListItem';

type Props = {
  dogruns: Dogrun[];
};

const DogrunList = (props: Props) => {
  const { dogruns } = props;

  const DogrunListItems = useMemo(
    () =>
      dogruns.map((dogrun, i) => (
        <div key={`dogrun-item${i}`}>
          <DogrunListItem dogrun={dogrun} />
        </div>
      )),
    [dogruns],
  );

  return <div className="flex flex-col bg-slate-50">{DogrunListItems}</div>;
};

export default DogrunList;

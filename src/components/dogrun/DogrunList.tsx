import { useMemo } from 'react';
import DogrunItem from '../../app/(default)/dogrun/components/DogrunItem';
import { Dogrun } from '@/types/Dogrun';
import { Button } from '@/components/ui/button';

type Props = {
  dogruns: Dogrun[];
  searchDogrun: () => void;
  searching: boolean;
};

const DogrunList = (props: Props) => {
  const { dogruns, searchDogrun, searching } = props;

  const dogrunItems = useMemo(
    () =>
      dogruns.map((dogrun, i) => (
        <div key={`dogrun-item${i}`}>
          <DogrunItem dogrun={dogrun} />
        </div>
      )),
    [dogruns],
  );

  return (
    <div className="flex flex-col bg-slate-50">
      <div className="p-2">
        <Button
          variant="outline"
          size="full"
          onClick={searchDogrun}
          disabled={searching}
        >
          ドッグラン検索
        </Button>
      </div>
      {dogrunItems}
    </div>
  );
};

export default DogrunList;

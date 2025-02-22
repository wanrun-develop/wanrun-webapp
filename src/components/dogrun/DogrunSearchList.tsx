import { DogrunListItem } from '@/types/Dogrun';
import { Button } from '../ui/button';
import DogrunList from './DogrunList';
import { DogrunTag } from '@/hooks/dogrun/useDogrunTag';
import DogrunTagList from './DogrunTagList';

type Props = {
  dogruns: DogrunListItem[];
  searchDogrun: () => void;
  searching: boolean;
  tags: DogrunTag[];
  selectedTags: number[];
  toggleTag: (id: number) => void;
};

const DogrunSearchList = (props: Props) => {
  const { dogruns, searchDogrun, searching, tags, selectedTags, toggleTag } =
    props;

  return (
    <div className="w-full flex flex-col bg-slate-50">
      <div className="p-2">
        <Button
          variant="outline"
          size="full"
          onClick={searchDogrun}
          disabled={searching}
        >
          ドッグラン検索
        </Button>
        <div className="flex gap-1 mx-2 my-2 overflow-x-scroll hidden-scrollbar">
          <DogrunTagList
            tags={tags}
            selectedTags={selectedTags}
            toggleTag={toggleTag}
          />
        </div>
      </div>
      <DogrunList dogruns={dogruns} />
    </div>
  );
};

export default DogrunSearchList;

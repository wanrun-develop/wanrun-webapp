import { DogrunTag } from '@/hooks/dogrun/useDogrunTag';
import { Button } from '../ui/button';
import DogrunTagList from './DogrunTagList';

type Props = {
  searching: boolean;
  tags: DogrunTag[];
  selectedTags: number[];
  searchDogrun: () => void;
  toggleTag: (id: number) => void;
};

const DogrunSearchHeader = (props: Props) => {
  const { searching, tags, selectedTags, searchDogrun, toggleTag } = props;

  return (
    <div className="sm:hidden">
      <div className="mx-2 mb-4">
        <Button
          variant="outline"
          size="full"
          onClick={() => searchDogrun()}
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
    </div>
  );
};

export default DogrunSearchHeader;

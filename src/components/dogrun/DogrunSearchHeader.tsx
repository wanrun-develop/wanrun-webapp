import { Button } from '../ui/button';

type Props = {
  searchDogrun: () => void;
  searching: boolean;
};

const DogrunSearchHeader = (props: Props) => {
  const { searchDogrun, searching } = props;

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
      </div>
    </div>
  );
};

export default DogrunSearchHeader;

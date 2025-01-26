import { Button } from '../ui/button';

type Props = {
  searchDogrun: () => void;
};

const DogrunSearchHeader = (props: Props) => {
  const { searchDogrun } = props;

  return (
    <div className="sm:hidden">
      <div className="mx-2 mb-4">
        <Button variant="outline" size="full" onClick={() => searchDogrun()}>
          ドッグラン検索
        </Button>
      </div>
    </div>
  );
};

export default DogrunSearchHeader;

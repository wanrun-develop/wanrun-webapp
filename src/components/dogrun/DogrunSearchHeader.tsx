import { Button } from '../ui/button';

const DogrunSearchHeader = () => {
  return (
    <div className="sm:hidden">
      <div className="mx-2 my-4">
        <Button variant="outline" size="full">
          ドッグラン検索
        </Button>
      </div>
    </div>
  );
};

export default DogrunSearchHeader;

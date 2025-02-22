import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

type Props = {
  searching: boolean;
  categories: { id: number; label: string }[];
  selectedCategories: number[];
  searchDogrun: () => void;
  toggleCategory: (id: number) => void;
};

const DogrunSearchHeader = (props: Props) => {
  const {
    searching,
    categories,
    selectedCategories,
    searchDogrun,
    toggleCategory,
  } = props;

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
      <div className="flex gap-1 mx-2 mb-2">
        {categories.map((category) => (
          <Badge
            key={category.id}
            variant="outline"
            className={`${selectedCategories.includes(category.id) ? 'border-blue-400 bg-blue-300 text-blue-600' : 'border-gray-400'} cursor-pointer`}
            onClick={() => toggleCategory(category.id)}
          >
            {category.label}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default DogrunSearchHeader;

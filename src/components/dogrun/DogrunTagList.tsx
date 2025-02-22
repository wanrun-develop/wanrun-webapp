import { DogrunTag } from '@/hooks/dogrun/useDogrunTag';
import { Badge } from '../ui/badge';

type Props = {
  tags: DogrunTag[];
  selectedTags: number[];
  toggleTag: (id: number) => void;
};

const DogrunTagList = (props: Props) => {
  const { tags, selectedTags, toggleTag } = props;

  return (
    <>
      {tags.map((tag) => (
        <Badge
          key={tag.tagId}
          variant="outline"
          className={`${selectedTags.includes(tag.tagId) ? 'border-blue-400 bg-blue-300 text-blue-600' : 'border-gray-400'} cursor-pointer`}
          onClick={() => toggleTag(tag.tagId)}
        >
          {tag.tagName}
        </Badge>
      ))}
    </>
  );
};

export default DogrunTagList;

import { DogrunTag } from '@/hooks/dogrun/useDogrunTag';
import { Badge } from '../ui/badge';
import { Skeleton } from '../ui/skeleton';

type Props = {
  tags: DogrunTag[];
  selectedTags: number[];
  loading?: boolean;
  toggleTag: (id: number) => void;
};

const DogrunTagList = (props: Props) => {
  const { tags, selectedTags, loading = false, toggleTag } = props;

  if (loading) {
    return (
      <>
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="w-20 h-7 rounded-lg" />
        ))}
      </>
    );
  }

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

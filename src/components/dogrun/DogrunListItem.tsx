import Image from 'next/image';
import { DogrunListItem as Dogrun } from '@/types/Dogrun';
import usePhoto from '../../hooks/dogrun/usePhoto';
import NoImage from '@public/noimage.png';
import { Text } from '../ui/text';
import { Bookmark, StarIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { memo } from 'react';

type Props = {
  dogrun: Dogrun;
  handleBookmark: (dogrun: Dogrun) => void;
};

const DogrunListItem = memo((props: Props) => {
  const { dogrun, handleBookmark } = props;

  const photo = dogrun.photos?.[0];
  const imageUrl = usePhoto(photo);

  const clickBookmark = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleBookmark(dogrun);
  };

  return (
    <div className="w-full">
      <Link href={`/dogrun/${dogrun.dogrunId}`}>
        <div className="w-full aspect-[4/3] relative">
          <Image
            src={imageUrl || NoImage}
            className="rounded-md"
            alt="no image"
            fill
            style={{
              objectFit: 'cover',
              color: 'black',
            }}
            priority={false}
          />
          <Button
            variant="none"
            className="absolute top-1 right-1 p-2"
            onClick={clickBookmark}
          >
            <Bookmark
              className="w-6 h-6 text-white"
              fill={dogrun.isBookmarked ? 'red' : 'gray'}
            />
          </Button>
        </div>
        <div className="w-full p-[10px] box box-border ">
          <div className="grid grid-cols-4 grid-rows-2 gap-1 items-center">
            <div className="col-span-3 flex items-center">
              <Text
                size="lg"
                weight="medium"
                className="inline-block w-full text-nowrap overflow-hidden text-ellipsis"
              >
                {dogrun?.name || 'mocktest'}
              </Text>
            </div>
            <div className="col-start-4 flex items-center">
              <StarIcon className="text-yellow-500" fill="currentColor" />(
              {dogrun.googleRating})
            </div>
            <div className="col-span-4 row-start-2 flex items-center">
              <Text className="inline-block w-full text-nowrap overflow-hidden text-ellipsis">
                description,description,description, description
              </Text>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
});

DogrunListItem.displayName = 'DogrunListItem';

export default DogrunListItem;

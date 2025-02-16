import Image from 'next/image';
import { DogrunListItem as Dogrun } from '@/types/Dogrun';
import usePhoto from '../../hooks/dogrun/usePhoto';
import NoImage from '@public/noimage.png';
import { Text } from '../ui/text';
import { StarIcon } from 'lucide-react';

type Props = {
  dogrun: Dogrun;
};

const DogrunListItem = (props: Props) => {
  const { dogrun } = props;

  const photo = dogrun.photos?.[0];
  const imageUrl = usePhoto(photo);

  return (
    <div className="w-full">
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
        />
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
            <StarIcon className={true ? 'text-yellow-500' : 'text-gray-300'} />(
            {dogrun.googleRating})
          </div>
          <div className="col-span-4 row-start-2 flex items-center">
            <Text className="inline-block w-full text-nowrap overflow-hidden text-ellipsis">
              description,description,description, description
            </Text>
          </div>
        </div>

        {/* <p className="overflow-hidden text-ellipsis min-w-0">
        </p> */}
      </div>
    </div>
  );
};

export default DogrunListItem;

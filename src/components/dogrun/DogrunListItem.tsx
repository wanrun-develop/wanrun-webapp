import Image from 'next/image';
import { DogrunListItem as Dogrun } from '@/types/Dogrun';
import usePhoto from '../../hooks/dogrun/usePhoto';
import NoImage from '@public/noimage.png';

type Props = {
  dogrun: Dogrun;
};

const DogrunListItem = (props: Props) => {
  const { dogrun } = props;

  const photo = dogrun.photos?.[0];
  const imageUrl = usePhoto(photo);

  return (
    <div className="w-full h-[200px]">
      <div className="w-full h-3/5 relative">
        <Image
          src={imageUrl || NoImage}
          alt="no image"
          fill
          style={{
            objectFit: 'cover',
            color: 'black',
          }}
        />
      </div>
      <div className="w-full p-[10px] box box-border ">
        <p>{dogrun?.name || 'mocktest'}</p>
        <p className="overflow-hidden text-ellipsis min-w-0">
          description,description,description
        </p>
      </div>
    </div>
  );
};

export default DogrunListItem;

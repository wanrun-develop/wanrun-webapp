import { DogrunListItem } from '@/types/Dogrun';
import Image from 'next/image';
import NoImage from '@public/noimage.png';
import usePhoto from '@/hooks/dogrun/usePhoto';
import Link from 'next/link';

type DogrunInfoCardProps = {
  dogrun: DogrunListItem;
};

const DogrunInfoCard = ({ dogrun }: DogrunInfoCardProps) => {
  const photo = dogrun.photos?.[0];
  const imageUrl = usePhoto(photo);

  return (
    <Link href={`/dogrun/${dogrun.dogrunId}`}>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-20 sm:bottom-6 flex items-center bg-white rounded-lg shadow-lg overflow-hidden max-w-xs w-full z-5">
        <div className="w-20 h-20 relative">
          <Image
            src={imageUrl || NoImage}
            alt={dogrun.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 p-3">
          <h3 className="font-bold text-sm truncate">{dogrun.name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default DogrunInfoCard;

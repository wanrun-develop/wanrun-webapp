import Image from 'next/image';
import mockDogruns from '../mock/dogrun';
import { Text } from '@/components/ui/text';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

type Props = {
  params: {
    id: string;
  };
};

const dogruns = mockDogruns;
const dogrun = dogruns[0];

const mockImages = Array.from({ length: 5 }).map(
  (_, i) => `https://placedog.net/400/311?id=${i + 1}`,
);

const DogrunDetailPage = (props: Props) => {
  const { params } = props;
  const dogrunId = params.id;

  return (
    <div className="sm:container mx-auto sm:p-8">
      <Text size="2xl" weight="bold" className="hidden sm:block">
        <p className="mb-4">
          {dogrunId}: {dogrun.name}
        </p>
      </Text>

      <Carousel>
        <CarouselContent>
          {mockImages.map((src, idx) => (
            <CarouselItem key={idx} className="relative h-72 md:h-96">
              <Image
                src={src}
                alt={`${dogrun.name} image ${idx + 1}`}
                fill
                className="object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="p-8 sm:p-0">
        <Text size="2xl" weight="bold" className="sm:hidden">
          {dogrunId}: {dogrun.name}
        </Text>
      </div>
    </div>
  );
};

export default DogrunDetailPage;

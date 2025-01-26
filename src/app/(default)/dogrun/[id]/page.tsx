import Image from 'next/image';
import { Text } from '@/components/ui/text';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { mockDogrun } from '../mock/dogrun';
import { RatingDisplay } from '@/components/ui/rating-display';
import CustomMap from '@/components/map/CustomMap';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';

type Props = {
  params: {
    id: string;
  };
};

const dogrun = mockDogrun;

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

        {dogrun.nowOpen ? (
          <Text className="text-green-400">営業中</Text>
        ) : (
          <Text className="text-red-400">営業時間外</Text>
        )}

        <div className="py-4">
          <Text>
            〒{dogrun.address.postCode} {dogrun.address.address}
          </Text>
        </div>

        <div className="py-2 flex items-center">
          <Text className="pr-2">{dogrun.googleRating}</Text>
          <RatingDisplay rating={dogrun.googleRating} />
          <Text className="pl-2">({dogrun.userRatingCount})</Text>
        </div>

        <div className="py-2 flex overflow-x-auto">
          {dogrun.dogrunTagId.map((tagId, idx) => (
            <Badge key={idx} variant="outline" className="mx-2">
              Tag{tagId}
            </Badge>
          ))}
        </div>

        <div>
          <Text>{dogrun.description}</Text>
        </div>

        <div className="py-4">
          <Text size="xl">営業時間</Text>
          <ul>
            {Object.entries(dogrun.businessHour.regular).map(([day, time]) => (
              <li key={day}>
                <Text>
                  {day}: {time.openTime} - {time.closeTime}
                </Text>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full h-72">
          <CustomMap
            defaultCenter={{
              latitude: dogrun.location.latitude,
              longitude: dogrun.location.longitude,
            }}
            location={dogrun.location}
            defaultZoom={16}
          />
        </div>
      </div>
    </div>
  );
};

export default DogrunDetailPage;

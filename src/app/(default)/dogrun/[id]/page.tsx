import Image from 'next/image';
import { Text } from '@/components/ui/text';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { mockDogrun } from '../../../../mock/dogrun';
import { RatingDisplay } from '@/components/ui/rating-display';
import CustomMap from '@/components/map/CustomMap';
import { Badge } from '@/components/ui/badge';
import { Metadata } from 'next';
import { Dogrun } from '@/types/Dogrun';

type Props = {
  params: {
    id: string;
  };
};

async function getDogrunData(id: string): Promise<Dogrun> {
  const res = await fetch(`https://placedog.net/400/311`, {
    next: { revalidate: 3600 },
  });
  console.log(`SSR Server Request Test: ${res.ok}`);

  // モックデータを返す
  return mockDogrun;
}

const mockImages = Array.from({ length: 5 }).map(
  (_, i) => `https://placedog.net/400/311?id=${i + 1}`,
);

// メタデータを動的に生成する関数
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const dogrunId = params.id;
  const dogrun = await getDogrunData(dogrunId);

  return {
    title: `${dogrun.name} | ドッグラン情報`,
    description: `${dogrun.name}の詳細ページです。`,
  };
};

const DogrunDetailPage = async (props: Props) => {
  const { params } = props;
  const dogrunId = params.id;
  const dogrun = await getDogrunData(dogrunId);

  return (
    <div className="mx-auto sm:p-8 max-w-5xl">
      <Text size="2xl" weight="bold" className="hidden sm:block">
        <p className="mb-4">{dogrun.name}</p>
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
          {dogrun.name}
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
          {dogrun.dogrunTagId.map((tagId: number, idx: number) => (
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
            {Object.entries(dogrun.businessHour.regular).map(([day, hours]) => (
              <li key={day}>
                <Text>
                  {day}: {hours.openTime} - {hours.closeTime}
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

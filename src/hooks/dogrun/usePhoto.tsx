import useApi from '@/hooks/common/useApi';
import { Photo } from '@/types/Dogrun';
import useSWRImmutable from 'swr/immutable';

type PhotoSrcResponse = {
  src: string;
};

const usePhoto = (photo?: Photo) => {
  const { api } = useApi();

  // photo がない場合は早期リターン
  if (!photo) return null;

  // const fetcher = (url: string) => api<PhotoSrcResponse>('GET', url);
  // const url = `/dogrun/photo/src?widthPx=${photo?.widthPx}&heightPx=${photo?.heightPx}&name=${photo?.photoKey}`;
  // const { data } = useSWRImmutable<PhotoSrcResponse>(url, fetcher);

  // return data?.src;

  // mock用
  const now = new Date().getMilliseconds();
  const id = (now % 220) + 1;
  const mockImage = `https://placedog.net/480/270?id=${id}`;
  return mockImage;
};

export default usePhoto;

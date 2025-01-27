import useApi from '@/app/hooks/common/useApi';
import { Photo } from '@/types/Dogrun';
import useSWRImmutable from 'swr/immutable';

type PhotoSrcResponse = {
  src: string;
};

const usePhoto = (photo: Photo) => {
  const { api } = useApi();

  const fetcher = (url: string) => api<PhotoSrcResponse>('GET', url);
  const url = `/dogrun/photo/src?widthPx=${photo?.widthPx}&heightPx=${photo?.heightPx}&name=${photo?.photoKey}`;
  const { data } = useSWRImmutable<PhotoSrcResponse>(url, fetcher);

  return data?.src;
};

export default usePhoto;

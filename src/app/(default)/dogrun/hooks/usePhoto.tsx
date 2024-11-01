import useApi from '@/libs/useApi';
import { Photo } from '@/types/Dogrun';
import useSWR from 'swr';

type PhotoSrcResponse = {
  src: string;
};

const usePhoto = (photo: Photo) => {
  const { api } = useApi();

  const fetcher = (url: string) => api<PhotoSrcResponse>('GET', url);
  const url = `/dogrun/photo/src?widthPx=${photo?.widthPx}&heightPx=${photo?.heightPx}&name=${photo?.photoKey}`;
  const { data } = useSWR<PhotoSrcResponse>(url, fetcher);

  return data?.src;
};

export default usePhoto;

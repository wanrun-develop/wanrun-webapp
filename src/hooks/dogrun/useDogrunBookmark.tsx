import { useCallback, useState } from 'react';
import useApi from '../common/useApi';
import { DogrunListItem } from '@/types/Dogrun';

const useDogrunBookmark = () => {
  const { api } = useApi();
  const [submitting, setSubmitting] = useState<boolean>(false);

  const createBookmark = useCallback(
    async (dogrunId: number) => {
      setSubmitting(true);
      try {
        await api('POST', '/bookmark/dogrun', {
          bookmark_dogrun_id: [dogrunId],
        });
      } catch (e: any) {
        console.error(e);
      } finally {
        setSubmitting(false);
      }
    },
    [api],
  );

  const deleteBookmark = useCallback(
    async (dogrunId: number) => {
      setSubmitting(true);
      try {
        await api('DELETE', '/bookmark/dogrun', {
          bookmark_dogrun_id: [dogrunId],
        });
      } catch (e: any) {
        console.error(e);
      } finally {
        setSubmitting(false);
      }
    },
    [api],
  );

  const toggleBookmark = useCallback(
    async (dogrun: DogrunListItem) => {
      if (dogrun.isBookmarked) {
        await deleteBookmark(dogrun.dogrunId);
        dogrun.isBookmarked = false;
      } else {
        await createBookmark(dogrun.dogrunId);
        dogrun.isBookmarked = true;
      }
    },
    [deleteBookmark, createBookmark],
  );

  return { toggleBookmark, createBookmark, deleteBookmark, submitting };
};

export default useDogrunBookmark;

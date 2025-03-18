import { useQuery } from '@tanstack/react-query';
import { getDetailsById } from '../services/apiTmdb';

export function useDetailsById(mediaType, mediaId, contentType = '') {
  const { isLoading, data, error } = useQuery({
    queryKey: ['detailsId', mediaType, mediaId, contentType],
    queryFn: () =>
      mediaType && mediaId && getDetailsById(mediaType, mediaId, contentType),
  });

  return { isLoading, data, error };
}

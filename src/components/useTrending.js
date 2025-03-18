import { useQuery } from '@tanstack/react-query';
import { getTrending } from '../services/apiTmdb';

export function useTrending(mediaType) {
  const { isLoading, data, error } = useQuery({
    queryKey: ['trendingData', mediaType],
    queryFn: () => getTrending(mediaType),
  });

  return { isLoading, data, error };
}

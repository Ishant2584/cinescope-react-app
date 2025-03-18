import { useQuery } from '@tanstack/react-query';
import { getLocation } from '../services/apiTmdb';

export function useLocationData() {
  const { isLoading, data, error } = useQuery({
    queryKey: ['location'],
    queryFn: getLocation,
  });

  return { isLoading, data, error };
}

import { useQuery } from '@tanstack/react-query';
import { getGenere } from '../services/apiTmdb';

export function useGenere(type) {
  const { isLoading, data, error } = useQuery({
    queryKey: ['Genere'],
    queryFn: () => getGenere(type),
  });

  return { isLoading, data, error };
}

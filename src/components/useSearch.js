import { useQuery } from '@tanstack/react-query';
import { getSearchData } from '../services/apiTmdb';
import { useRef } from 'react';

export function useSearch(searchQuery) {
  const controllerRef = useRef();
  const { isLoading, data, error } = useQuery({
    queryKey: ['search', searchQuery],
    queryFn: () =>
      searchQuery.length > 0 && getSearchData(searchQuery, controllerRef),
  });

  return { isLoading, data, error };
}

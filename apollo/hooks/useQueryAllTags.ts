import { useQuery } from '@apollo/client';
import { QUERY_ALL_TAGS } from '../gql/queries/all-tags';

export const useQueryAllTags = () => {
  const { data, error } = useQuery(QUERY_ALL_TAGS);

  return { data, error };
};

import { useQuery } from '@apollo/client';
import { QUERY_POST_ID } from '../queries/post-id';

export interface UseQueryPostIdVars {
  slug: string | string[] | undefined;
}

export const useQueryPostId = ({ slug }: UseQueryPostIdVars): string => {
  const {
    data: {
      post: { id },
    },
  } = useQuery(QUERY_POST_ID, { variables: { slug }, fetchPolicy: 'cache-only' });

  return id;
};

import { useQuery } from '@apollo/client';
import { QUERY_FULL_POST } from '../queries/full-post';

export interface UseQueryFullPostVars {
  slug: string | string[] | undefined;
}

export const useQueryFullPost = ({ slug }: UseQueryFullPostVars) => {
  const {
    data: { post },
  } = useQuery(QUERY_FULL_POST, { variables: { slug } });

  return post;
};

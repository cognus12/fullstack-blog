import { useQuery } from '@apollo/client';
import { QUERY_POST_LIST } from '../queries/post-list';

export interface UseQueryPostListVars {
  tag?: string | string[] | undefined;
}

export const useQueryPostList = ({ tag }: UseQueryPostListVars) => {
  const {
    data: {
      postList: { posts, lastId, hasMore, loadedCount },
    },
    error,
    loading,
    fetchMore,
  } = useQuery(QUERY_POST_LIST, { variables: { tag }, notifyOnNetworkStatusChange: true });

  return {
    data: {
      posts,
      lastId,
      hasMore,
      loadedCount,
    },
    error: error?.message,
    loading,
    fetchMore,
  };
};

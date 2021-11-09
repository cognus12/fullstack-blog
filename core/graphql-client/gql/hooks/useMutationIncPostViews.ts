import { useMutation } from '@apollo/client';
import { INC_POST_VIEWS } from '../mutations/inc-post-views';
import { QUERY_FULL_POST } from '../queries/full-post';
import { FullPostDTO } from '../../../../contracts/PostDTO';

interface FullPostData {
  post: FullPostDTO;
}

export const useMutationIncPostViews = () => {
  const [incViews, { data, loading, error }] = useMutation(INC_POST_VIEWS, {
    update(cache, { data: { incPostViews } }) {
      const currentData = cache.readQuery<FullPostData>({ query: QUERY_FULL_POST });

      if (!currentData) {
        return;
      }

      cache.writeQuery({
        query: QUERY_FULL_POST,
        data: { post: { ...currentData.post, views: incPostViews.views } },
      });
    },
  });

  return {
    incViews,
    data,
    loading,
    error,
  };
};

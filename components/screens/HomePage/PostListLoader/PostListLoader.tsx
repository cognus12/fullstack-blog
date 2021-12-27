import React from 'react';
import { PostCard } from '../PostCard';
import { LoadMore } from './LoadMore';
import { PostPreviewDTO } from '../../../../common/contracts/PostDTO';
import { useSlug } from '../../../../hooks';
import { useQueryPostList } from '../../../../apollo';

export const PostListLoader: React.FC = () => {
  const tag = useSlug();

  const {
    data: { posts, lastId, hasMore, loadedCount },
    loading,
    error,
    fetchMore,
  } = useQueryPostList({ tag });

  return (
    <>
      <div className="flex flex-col gap-y-[20px]">
        {posts.map((post: PostPreviewDTO) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
      {hasMore && (
        <div className="mt-[40px]">
          <LoadMore
            fetcher={() => fetchMore({ variables: { lastId, loadedCount, tag } })}
            loading={loading}
            error={error}
          />
        </div>
      )}
    </>
  );
};

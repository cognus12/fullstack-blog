import React from 'react';
import { LoadMoreWrapper, PostListWrapper } from './_PostListLoader.styles';
import { PostCard } from '../PostCard';
import { LoadMore } from './LoadMore';
import { PostPreviewDTO } from '../../../../common/contracts/PostDTO';
import { useSlug } from '../../../../hooks';
import { useQueryPostList } from '../../../../core/graphql-client';

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
      <PostListWrapper>
        {posts.map((post: PostPreviewDTO) => (
          <PostCard key={post.id} {...post} />
        ))}
      </PostListWrapper>
      {hasMore && (
        <LoadMoreWrapper>
          <LoadMore
            fetcher={() => fetchMore({ variables: { lastId, loadedCount, tag } })}
            loading={loading}
            error={error}
          />
        </LoadMoreWrapper>
      )}
    </>
  );
};

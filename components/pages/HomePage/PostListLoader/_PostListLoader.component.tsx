import React from 'react';
import { LoadMoreWrapper, PostListWrapper } from './_PostListLoader.styles';
import { PostCard } from '../PostCard';
import { LoadMore } from './LoadMore';
import { PostPreviewDTO } from '../../../../contracts/PostDTO';
import { useSlug } from '../../../../core/hooks';
import { useQueryPostList } from '../../../../core/graphql-client';

export const PostListLoader: React.FC = () => {
  const tag = useSlug();

  const { posts, lastId, hasMore, loadedCount, fetchMore } = useQueryPostList({ tag });

  return (
    <>
      <PostListWrapper>
        {posts.map((post: PostPreviewDTO) => (
          <PostCard key={post.id} {...post} />
        ))}
      </PostListWrapper>
      {hasMore && (
        <LoadMoreWrapper>
          <LoadMore fetcher={() => fetchMore({ variables: { lastId, loadedCount, tag } })} />
        </LoadMoreWrapper>
      )}
    </>
  );
};

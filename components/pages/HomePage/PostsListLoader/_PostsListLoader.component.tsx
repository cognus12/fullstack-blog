import React from 'react';
import { useQuery } from '@apollo/client';
import { LoadMoreWrapper, PostsFeed } from './_PostsListLoader.styles';
import { PostCard } from '../PostCard';
import { LoadMore } from './LoadMore';
import { QUERY_POSTS_LIST } from '../../../../core/graphql-client';
import { PostPreviewDTO } from '../../../../contracts/PostDTO';
import { useSlug } from '../../../../core/hooks';

export const PostsListLoader: React.FC = () => {
  const tag = useSlug();

  const {
    data: {
      postsList: { posts, lastId, hasMore, loadedCount },
    },
    fetchMore,
  } = useQuery(QUERY_POSTS_LIST, { variables: { tag } });

  return (
    <>
      <PostsFeed>
        {posts.map((post: PostPreviewDTO) => (
          <PostCard key={post.id} {...post} />
        ))}
      </PostsFeed>
      {hasMore && (
        <LoadMoreWrapper>
          <LoadMore fetcher={() => fetchMore({ variables: { lastId, loadedCount, tag } })} />
        </LoadMoreWrapper>
      )}
    </>
  );
};

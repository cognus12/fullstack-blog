import React from 'react';
import { useQuery } from '@apollo/client';
import { LoadMoreWrapper, PostsFeed } from './PostsListLoader.styles';
import { PostCard } from '../PostCard';
import { LoadMore } from './LoadMore';
import { QUERY_ALL_POSTS } from '../../../../core/graphql-client';
import { PostPreviewDTO } from '../../../../contracts/PostDTO';

export const PostsListLoader: React.FC = () => {
  const {
    data: {
      postsList: { posts, lastId, hasMore, loadedCount },
    },
    fetchMore,
  } = useQuery(QUERY_ALL_POSTS);

  return (
    <>
      <PostsFeed>
        {posts.map((post: PostPreviewDTO) => (
          <PostCard key={post.id} {...post} />
        ))}
      </PostsFeed>
      <LoadMoreWrapper>
        {hasMore && <LoadMore fetcher={() => fetchMore({ variables: { lastId, loadedCount } })} />}
      </LoadMoreWrapper>
    </>
  );
};

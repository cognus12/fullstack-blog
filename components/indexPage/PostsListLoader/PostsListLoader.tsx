import React from 'react';
import { useQuery } from '@apollo/client';
import { PostPreviewDTO } from '../../../backend/db/interfaces/post-repo';
import { LoadMoreWrapper, PostsFeed } from './styles';
import { PostCard } from '../PostCard';
import { LoadMore } from './LoadMore';
import { GET_ALL_POSTS } from '../../../core/graphql-client';

export const PostsListLoader: React.FC = () => {
  const {
    data: {
      postsList: { posts, lastId, hasMore, loadedCount },
    },
    fetchMore,
  } = useQuery(GET_ALL_POSTS);

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

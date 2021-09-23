import React from 'react';
import { useQuery } from '@apollo/client';
import { PostPreviewDTO } from '../../../core/db/interfaces/post';
import { LoadMoreWrapper, PostsFeed } from './styles';
import { PostCard } from '../PostCard';
import { LoadMore } from './LoadMore';
import { GET_ALL_POSTS } from '../../../core/apollo/client/queries/queries';

export interface PostsWrapperProps {}

export const PostsWrapper: React.FC<PostsWrapperProps> = () => {
  const {
    data: {
      getPosts: { posts, lastId },
    },
    fetchMore,
  } = useQuery(GET_ALL_POSTS);

  return (
    <>
      <PostsFeed flexProps={{ flexWrap: 'wrap', columnGap: '30px', rowGap: '30px' }}>
        {posts.map((post: PostPreviewDTO) => (
          <PostCard key={post.id} {...post} />
        ))}
      </PostsFeed>
      <LoadMoreWrapper>
        <LoadMore fetcher={() => fetchMore({ variables: { lastId } })} />
      </LoadMoreWrapper>
    </>
  );
};

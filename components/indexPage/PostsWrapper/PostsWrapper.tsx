import React from 'react';
import { PostPreviewDTO } from '../../../core/db/interfaces/post';
import { LoadMoreWrapper, PostsFeed } from './styles';
import { PostCard } from '../PostCard';
import { LoadMore } from './LoadMore';
import { useQuery } from '@apollo/client';
import { LOCAL__POSTS } from '../../../core/apollo/client';

export interface PostsWrapperProps {}

export const PostsWrapper: React.FC<PostsWrapperProps> = () => {
  const {
    data: { posts },
  } = useQuery(LOCAL__POSTS);

  return (
    <>
      <PostsFeed flexProps={{ flexWrap: 'wrap', columnGap: '30px', rowGap: '30px' }}>
        {posts.map((post: PostPreviewDTO) => (
          <PostCard key={post.id} {...post} />
        ))}
      </PostsFeed>
      <LoadMoreWrapper>
        <LoadMore />
      </LoadMoreWrapper>
    </>
  );
};

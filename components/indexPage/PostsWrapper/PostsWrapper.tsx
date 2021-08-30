import React from 'react';
import { PostDTO } from '../../../interfaces/post';
import { PostsFeed } from './styles';
import { PostCard } from '../PostCard';

export interface PostsWrapperProps {
  posts: PostDTO[];
}

export const PostsWrapper: React.FC<PostsWrapperProps> = ({ posts }) => {
  return (
    <PostsFeed flexProps={{ flexWrap: 'wrap', columnGap: '30px', rowGap: '30px' }}>
      {posts.map((post: PostDTO) => (
        <PostCard key={post.id} {...post} />
      ))}
    </PostsFeed>
  );
};

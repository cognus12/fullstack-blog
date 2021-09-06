import React from 'react';
import { PostPreviewDTO } from '../../../core/db/interfaces/post';
import { PostsFeed } from './styles';
import { PostCard } from '../PostCard';

export interface PostsWrapperProps {
  posts: PostPreviewDTO[];
}

export const PostsWrapper: React.FC<PostsWrapperProps> = ({ posts }) => {
  return (
    <PostsFeed flexProps={{ flexWrap: 'wrap', columnGap: '30px', rowGap: '30px' }}>
      {posts.map((post: PostPreviewDTO) => (
        <PostCard key={post.id} {...post} />
      ))}
    </PostsFeed>
  );
};

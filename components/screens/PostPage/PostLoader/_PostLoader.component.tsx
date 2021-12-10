import React from 'react';
import { useQueryFullPost } from '../../../../apollo';
import { PostArticle } from './PostArticle';
import { useSlug } from '../../../../hooks';

export const PostLoader: React.FC = () => {
  const slug = useSlug();

  const post = useQueryFullPost({ slug });

  return <PostArticle {...post} />;
};

import React from 'react';
import { useQueryFullPost } from '../../../../core/graphql-client';
import { PostArticle } from './PostArticle';
import { useSlug } from '../../../../core/hooks';

export const PostLoader: React.FC = () => {
  const slug = useSlug();

  const post = useQueryFullPost({ slug });

  return <PostArticle {...post} />;
};

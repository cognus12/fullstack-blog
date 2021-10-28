import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_FULL_POST } from '../../../../core/graphql-client';
import { PostArticle } from './PostArticle';
import { useSlug } from '../../../../core/hooks';

export const PostLoader: React.FC = () => {
  const slug = useSlug();

  const {
    data: { post },
  } = useQuery(QUERY_FULL_POST, { variables: { slug } });

  return <PostArticle {...post} />;
};

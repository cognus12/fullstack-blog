import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { QUERY_CERTAIN_POST } from '../../../core/graphql-client';
import { PostArticle } from '../PostArticle';

export const PostLoader: React.FC = () => {
  const router = useRouter();

  const {
    data: { post },
  } = useQuery(QUERY_CERTAIN_POST, { variables: { slug: router.query.slug } });

  return <PostArticle {...post} />;
};

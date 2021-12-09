import React from 'react';
import { PostLoader } from './PostLoader';
import { PageInner } from '../../layout/PageInner';
import { useSlug } from '../../../hooks';
import { useQueryPostPartials } from '../../../core/graphql-client';

export const PostPage: React.FC = () => {
  const slug = useSlug();
  const { title } = useQueryPostPartials({ slug, fields: ['title'] });

  return (
    <PageInner title={title}>
      <PostLoader />
    </PageInner>
  );
};

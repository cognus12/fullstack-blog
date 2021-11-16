import React from 'react';
import { PostLoader } from './PostLoader';
import { PageInner } from '../../layout/PageInner';

export const PostPage: React.FC = () => (
  <PageInner title="Blog post">
    <PostLoader />
  </PageInner>
);

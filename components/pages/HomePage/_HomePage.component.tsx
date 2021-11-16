import React from 'react';
import { PostListLoader } from './PostListLoader';
import { PageInner } from '../../layout/PageInner';

export const HomePage: React.FC = () => (
  <PageInner title="Fullstack blog">
    <PostListLoader />
  </PageInner>
);

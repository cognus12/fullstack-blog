import Head from 'next/head';
import { PageSection } from '../../../styles/containers';
import { PostLoader } from './PostLoader';
import React from 'react';

export const PostPage: React.FC = () => (
  <>
    <Head>
      <title>Blog post</title>
    </Head>
    <PageSection>
      <PostLoader />
    </PageSection>
  </>
);

import React from 'react';
import Head from 'next/head';
import { PageSection } from '../../../styles/containers';
import { PostsListLoader } from './PostsListLoader';

export const HomePage: React.FC = () => (
  <>
    <Head>
      <title>Create Next App</title>
    </Head>
    <PageSection>
      <PostsListLoader />
    </PageSection>
  </>
);

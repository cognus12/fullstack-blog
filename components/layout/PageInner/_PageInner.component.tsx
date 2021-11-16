import React from 'react';
import Head from 'next/head';
import { PageSection } from '../../../styles/containers';

export interface PageInnerProps {
  title: string;
}

export const PageInner: React.FC<PageInnerProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <PageSection>{children}</PageSection>
    </>
  );
};

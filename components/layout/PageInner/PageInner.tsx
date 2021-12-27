import React from 'react';
import Head from 'next/head';

export interface PageInnerProps {
  title: string;
}

export const PageInner: React.FC<PageInnerProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <section className="py-[40px]">{children}</section>
    </>
  );
};

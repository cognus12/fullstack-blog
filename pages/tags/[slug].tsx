import React from 'react';
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { SharedPageProps, wrapWithSharedPageProps } from '../../backend/enhancers';
import { QUERY_HOME_PAGE_DATA, queryInitialApolloState } from '../../core/graphql-client';
import { HomePage } from '../../components/pages/HomePage';

export interface HomePageOwnProps {}

export interface HomePageProps extends SharedPageProps, HomePageOwnProps {}

const getHomeServerSideProps: GetServerSideProps<HomePageOwnProps> = async ({ params = {} }) => {
  const { slug } = params;

  const { initialApolloState } = await queryInitialApolloState({
    query: QUERY_HOME_PAGE_DATA,
    variables: { tag: slug },
  });

  return {
    props: {
      initialApolloState,
    },
  };
};

export const getServerSideProps = wrapWithSharedPageProps<HomePageProps>(getHomeServerSideProps);

const Tags: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = () => <HomePage />;

export default Tags;

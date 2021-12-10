import React from 'react';
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { QUERY_HOME_PAGE_DATA } from '../apollo';
import { wrapWithSharedPageProps, SharedPageProps } from '../backend/enhancers';
import { queryInitialApolloState } from '../apollo';

import { HomePage } from '../components/screens/HomePage';

export interface HomePageOwnProps {}

export interface HomePageProps extends SharedPageProps, HomePageOwnProps {}

const getHomeServerSideProps: GetServerSideProps<HomePageOwnProps> = async () => {
  const { initialApolloState } = await queryInitialApolloState({ query: QUERY_HOME_PAGE_DATA });

  return {
    props: {
      initialApolloState,
    },
  };
};

export const getServerSideProps = wrapWithSharedPageProps<HomePageProps>(getHomeServerSideProps);

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = () => <HomePage />;

export default Home;

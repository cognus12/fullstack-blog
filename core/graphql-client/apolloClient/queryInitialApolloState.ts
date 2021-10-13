import { DocumentNode } from 'graphql';
import { NormalizedCacheObject } from '@apollo/client';
import { initializeApollo } from './initializeApollo';

export type InitialQueryFunction = <D, V>(opts: {
  query: DocumentNode;
  variables?: V;
}) => Promise<{ data: D; initialApolloState: NormalizedCacheObject }>;

export const queryInitialApolloState: InitialQueryFunction = async ({ query, variables }) => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query,
    variables,
  });

  const initialApolloState = apolloClient.cache.extract();

  return {
    data,
    initialApolloState,
  };
};

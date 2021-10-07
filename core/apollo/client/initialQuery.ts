import { DocumentNode } from 'graphql';
import { NormalizedCacheObject } from '@apollo/client';
import { initializeApollo } from './client';

export type InitialQueryFunction = <D, V>(opts: {
  query: DocumentNode;
  variables?: V;
}) => Promise<{ data: D; initialApolloState: NormalizedCacheObject }>;

export const initialQuery: InitialQueryFunction = async ({ query, variables }) => {
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

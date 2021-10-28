import { DocumentNode } from 'graphql';
import { NormalizedCacheObject } from '@apollo/client';
import { ApolloClientWrapper } from './initializeApollo';

export type InitialQueryFunction = <D, V>(opts: {
  query: DocumentNode;
  variables?: V;
}) => Promise<{ data: D; initialApolloState: NormalizedCacheObject }>;

export const queryInitialApolloState: InitialQueryFunction = async ({ query, variables }) => {
  const apolloClient = ApolloClientWrapper.getApolloInstance();

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

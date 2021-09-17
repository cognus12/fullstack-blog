import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { isServer } from '../../../utils';
import { cache } from './cache';

import { createIsomorphicLink } from './link';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: isServer(),
    link: createIsomorphicLink(),
    cache: cache,
  });
};

export const initializeApollo = (initialState = {}): ApolloClient<NormalizedCacheObject> => {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (isServer()) {
    return _apolloClient;
  }
  // Create the Apollo Client once in the client
  if (!apolloClient) {
    apolloClient = _apolloClient;
  }

  return _apolloClient;
};

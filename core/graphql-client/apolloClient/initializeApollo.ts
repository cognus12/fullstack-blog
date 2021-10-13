import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client';
import { cache } from './cache';

import { isServer } from '../../../helpers';
import { BASE_URL, GRAPHQL_PATH } from '../../../config/constants';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const createLink = () => {
  return new HttpLink({
    uri: isServer() ? `${BASE_URL}${GRAPHQL_PATH}` : GRAPHQL_PATH,
    credentials: 'same-origin',
  });
};

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: isServer(),
    link: createLink(),
    cache: cache,
    connectToDevTools: true,
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

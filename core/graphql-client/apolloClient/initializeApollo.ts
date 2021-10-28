import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client';
import { cache } from './cache';

import { isServer } from '../../../helpers';
import { BASE_URL, ENABLE_APOLLO_DEVTOOLS, GRAPHQL_PATH } from '../../../config/constants';

export abstract class ApolloClientWrapper {
  private static _apolloClient: ApolloClient<NormalizedCacheObject>;

  private static _createLink = () => {
    return new HttpLink({
      uri: isServer() ? `${BASE_URL}${GRAPHQL_PATH}` : GRAPHQL_PATH,
      credentials: 'same-origin',
    });
  };

  private static _createApolloClient = () => {
    return new ApolloClient({
      ssrMode: isServer(),
      link: ApolloClientWrapper._createLink(),
      cache: cache,
      connectToDevTools: ENABLE_APOLLO_DEVTOOLS,
    });
  };

  public static getApolloInstance = (initialState = {}): ApolloClient<NormalizedCacheObject> => {
    const _apolloClient = ApolloClientWrapper._apolloClient ?? ApolloClientWrapper._createApolloClient();

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
    if (!ApolloClientWrapper._apolloClient) {
      ApolloClientWrapper._apolloClient = _apolloClient;
    }

    return _apolloClient;
  };
}

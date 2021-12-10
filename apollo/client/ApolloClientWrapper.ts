import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client';
import { cache } from './cache';

import { isServer } from '../../common/helpers';
import { getConfig } from '../../common/config/config.service';

export abstract class ApolloClientWrapper {
  private static _apolloClient: ApolloClient<NormalizedCacheObject>;

  private static _createLink = () => {
    const BASE_URL = getConfig('BASE_URL');
    const GRAPHQL_PATH = getConfig('GRAPHQL_PATH');

    if (!BASE_URL) {
      throw new Error('[ApolloClient]: NEXT_PUBLIC_BASE_URL is not specified in .local.env');
    }

    if (!GRAPHQL_PATH) {
      throw new Error('[ApolloClient]: NEXT_PUBLIC_GRAPHQL_PATH is not specified in .local.env');
    }

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
      connectToDevTools: getConfig('MODE') !== 'production',
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

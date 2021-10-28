import React from 'react';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { ApolloClientWrapper } from '../apolloClient/initializeApollo';

export const useApollo = (initialState: NormalizedCacheObject): ApolloClient<NormalizedCacheObject> => {
  return React.useMemo(() => ApolloClientWrapper.getApolloInstance(initialState), [initialState]);
};

import React from 'react';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { initializeApollo } from '../apolloClient/initializeApollo';

export const useApollo = (initialState: NormalizedCacheObject): ApolloClient<NormalizedCacheObject> => {
  return React.useMemo(() => initializeApollo(initialState), [initialState]);
};

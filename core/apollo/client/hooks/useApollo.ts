import React from 'react';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { initializeApollo } from '../client';

export const useApollo = (initialState: NormalizedCacheObject): ApolloClient<NormalizedCacheObject> => {
  return React.useMemo(() => initializeApollo(initialState), [initialState]);
};

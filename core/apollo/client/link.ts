import { SchemaLink } from '@apollo/client/link/schema';
import { schema } from '../schema/schema';
import { HttpLink } from '@apollo/client';
import { GRAPHQL_PATH } from '../../config/constants';

export type ApolloLink = SchemaLink | HttpLink;

export const createIsomorphicLink = (): ApolloLink => {
  if (typeof window === 'undefined') {
    return new SchemaLink({ schema });
  } else {
    return new HttpLink({
      uri: GRAPHQL_PATH,
      credentials: 'same-origin',
    });
  }
};

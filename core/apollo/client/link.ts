import { HttpLink } from '@apollo/client';
import { SchemaLink } from '@apollo/client/link/schema';
import { GRAPHQL_PATH } from '../../config/constants';
import { clientSchema } from '../schema/clientSchema';
import { isServer } from '../../../helpers';

export const createIsomorphicLink = () => {
  if (isServer()) {
    return new SchemaLink({ schema: clientSchema });
  }

  return new HttpLink({
    uri: GRAPHQL_PATH,
    credentials: 'same-origin',
  });
};

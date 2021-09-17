import { GRAPHQL_PATH } from '../../config/constants';
import { isServer } from '../../../utils';

// export const createIsomorphicLink = async () => {
//   if (isServer()) {
//     const { SchemaLink } = await import('@apollo/client/link/schema');
//     const { schema } = await import('../schema/schema');
//     return new SchemaLink({ schema });
//   }
//
//   return new HttpLink({
//     uri: GRAPHQL_PATH,
//     credentials: 'same-origin',
//   });
// };

export const createIsomorphicLink = () => {
  if (isServer()) {
    const { SchemaLink } = require('@apollo/client/link/schema');
    const { schema } = require('../schema/schema');
    return new SchemaLink({ schema });
  } else {
    const { HttpLink } = require('@apollo/client/link/http');
    return new HttpLink({
      uri: GRAPHQL_PATH,
      credentials: 'same-origin',
    });
  }
};

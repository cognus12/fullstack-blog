import { HttpLink } from '@apollo/client';
import { BASE_URL, GRAPHQL_PATH } from '../../config/constants';
import { isServer } from '../../../helpers';

export const createIsomorphicLink = () => {
  return new HttpLink({
    uri: isServer() ? `${BASE_URL}${GRAPHQL_PATH}` : GRAPHQL_PATH,
    credentials: 'same-origin',
  });
};

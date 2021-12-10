import { gql } from '@apollo/client';
import { FRAGMENT_ALL_TAGS } from '../fragments';

export const QUERY_ALL_TAGS = gql`
  ${FRAGMENT_ALL_TAGS}
  query {
    ...AllTags
  }
`;

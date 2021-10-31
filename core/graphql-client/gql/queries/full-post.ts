import { gql } from '@apollo/client';
import { FRAGMENT_CORE_POST_FIELDS } from '../fragments';

export const QUERY_FULL_POST = gql`
  ${FRAGMENT_CORE_POST_FIELDS}
  query ($slug: String) {
    post(slug: $slug) {
      ...CorePostFields
      content
    }
  }
`;

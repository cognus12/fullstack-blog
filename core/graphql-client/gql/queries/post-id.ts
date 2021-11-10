import { gql } from '@apollo/client';

export const QUERY_POST_ID = gql`
  query ($slug: String) {
    post(slug: $slug) {
      id
    }
  }
`;

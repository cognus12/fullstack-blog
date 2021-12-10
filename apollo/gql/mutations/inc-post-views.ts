import { gql } from '@apollo/client';

export const INC_POST_VIEWS = gql`
  mutation ($id: String) {
    incPostViews(id: $id) {
      views
    }
  }
`;

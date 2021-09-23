import { gql } from '@apollo/client';

export const GET_ALL_POSTS = gql`
  query ($lastId: String) {
    getPosts(lastId: $lastId) {
      posts {
        id
        title
        annotation
        cover
      }
      lastId
      hasMore
    }
  }
`;

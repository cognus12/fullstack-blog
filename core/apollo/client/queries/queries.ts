import { gql } from '@apollo/client';

export const GET_ALL_POSTS = gql`
  query ($loadedCount: Int, $lastId: String) {
    getPosts(loadedCount: $loadedCount, lastId: $lastId) {
      posts {
        id
        title
        annotation
        cover
      }
      lastId
      hasMore
      loadedCount
    }
  }
`;

import { gql } from '@apollo/client';

const CORE_POST_FIELDS = gql`
  fragment CorePostFields on Post {
    id
    title
    date
    views
    tags {
      title
      href
    }
  }
`;

export const GET_ALL_POSTS = gql`
  ${CORE_POST_FIELDS}
  query ($loadedCount: Int, $lastId: String) {
    postsList(loadedCount: $loadedCount, lastId: $lastId) {
      posts {
        ...CorePostFields
        slug
        annotation
        cover
      }
      lastId
      hasMore
      loadedCount
    }
  }
`;

export const GET_CERTAIN_POST = gql`
  ${CORE_POST_FIELDS}
  query ($slug: String) {
    post(slug: $slug) {
      ...CorePostFields
      content
    }
  }
`;

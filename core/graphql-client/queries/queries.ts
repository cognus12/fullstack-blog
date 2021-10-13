import { gql } from '@apollo/client';

const CORE_POST_FIELDS = gql`
  fragment CorePostFields on Post {
    id
    title
    date
    views
    tags
  }
`;

const ALL_TAGS_FRAGMENT = gql`
  fragment AllTags on HashTag {
    tag
    count
  }
`;

export const GET_ALL_POSTS = gql`
  ${CORE_POST_FIELDS}
  ${ALL_TAGS_FRAGMENT}
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
    allTags {
      ...AllTags
    }
  }
`;

export const QUERY_ALL_TAGS = gql`
  ${ALL_TAGS_FRAGMENT}
  query {
    allTags {
      ...AllTags
    }
  }
`;

export const GET_CERTAIN_POST = gql`
  ${CORE_POST_FIELDS}
  ${ALL_TAGS_FRAGMENT}
  query ($slug: String) {
    post(slug: $slug) {
      ...CorePostFields
      content
    }
    allTags {
      ...AllTags
    }
  }
`;

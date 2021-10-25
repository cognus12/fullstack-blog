import { gql } from '@apollo/client';

const FRAGMENT_CORE_POST_FIELDS = gql`
  fragment CorePostFields on Post {
    id
    title
    postDate
    views
    tags
  }
`;

const FRAGMENT_ALL_TAGS = gql`
  fragment AllTags on HashTag {
    tag
    count
  }
`;

export const QUERY_ALL_POSTS = gql`
  ${FRAGMENT_CORE_POST_FIELDS}
  ${FRAGMENT_ALL_TAGS}
  query ($loadedCount: Int, $lastId: String, $tag: String) {
    postsList(loadedCount: $loadedCount, lastId: $lastId, tag: $tag) {
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
  ${FRAGMENT_ALL_TAGS}
  query {
    allTags {
      ...AllTags
    }
  }
`;

export const QUERY_CERTAIN_POST = gql`
  ${FRAGMENT_CORE_POST_FIELDS}
  ${FRAGMENT_ALL_TAGS}
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

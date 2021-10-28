import { gql } from '@apollo/client';
import { FRAGMENT_ALL_TAGS, FRAGMENT_CORE_POST_FIELDS, FRAGMENT_POST_PREVIEW_FIELDS } from './fragments';

export const QUERY_HOME_PAGE_DATA = gql`
  ${FRAGMENT_CORE_POST_FIELDS}
  ${FRAGMENT_POST_PREVIEW_FIELDS}
  ${FRAGMENT_ALL_TAGS}
  query ($loadedCount: Int, $lastId: String, $tag: String) {
    postsList(loadedCount: $loadedCount, lastId: $lastId, tag: $tag) {
      posts {
        ...CorePostFields
        ...PostPreviewFields
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

export const QUERY_POSTS_LIST = gql`
  ${FRAGMENT_CORE_POST_FIELDS}
  ${FRAGMENT_POST_PREVIEW_FIELDS}
  query ($loadedCount: Int, $lastId: String, $tag: String) {
    postsList(loadedCount: $loadedCount, lastId: $lastId, tag: $tag) {
      posts {
        ...CorePostFields
        ...PostPreviewFields
      }
      lastId
      hasMore
      loadedCount
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

export const QUERY_POST_PAGE_DATE = gql`
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

export const QUERY_FULL_POST = gql`
  ${FRAGMENT_CORE_POST_FIELDS}
  query ($slug: String) {
    post(slug: $slug) {
      ...CorePostFields
      content
    }
  }
`;

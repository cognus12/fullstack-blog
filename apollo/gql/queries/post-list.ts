import { gql } from '@apollo/client';
import { FRAGMENT_CORE_POST_FIELDS, FRAGMENT_POST_PREVIEW_FIELDS } from '../fragments';

export const QUERY_POST_LIST = gql`
  ${FRAGMENT_CORE_POST_FIELDS}
  ${FRAGMENT_POST_PREVIEW_FIELDS}
  query ($loadedCount: Int, $lastId: String, $tag: String) {
    postList(loadedCount: $loadedCount, lastId: $lastId, tag: $tag) {
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

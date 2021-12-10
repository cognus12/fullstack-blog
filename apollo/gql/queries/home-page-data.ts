import { gql } from '@apollo/client';
import { FRAGMENT_ALL_TAGS, FRAGMENT_CORE_POST_FIELDS, FRAGMENT_POST_PREVIEW_FIELDS } from '../fragments';

export const QUERY_HOME_PAGE_DATA = gql`
  ${FRAGMENT_CORE_POST_FIELDS}
  ${FRAGMENT_POST_PREVIEW_FIELDS}
  ${FRAGMENT_ALL_TAGS}
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
    ...AllTags
  }
`;

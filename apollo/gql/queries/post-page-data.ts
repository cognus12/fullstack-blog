import { gql } from '@apollo/client';
import { FRAGMENT_ALL_TAGS, FRAGMENT_CORE_POST_FIELDS } from '../fragments';

export const QUERY_POST_PAGE_DATA = gql`
  ${FRAGMENT_CORE_POST_FIELDS}
  ${FRAGMENT_ALL_TAGS}
  query ($slug: String) {
    post(slug: $slug) {
      ...CorePostFields
      content
    }
    ...AllTags
  }
`;

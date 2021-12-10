import { gql } from '@apollo/client';

export const FRAGMENT_CORE_POST_FIELDS = gql`
  fragment CorePostFields on Post {
    id
    title
    postDate
    views
    tags
  }
`;

export const FRAGMENT_POST_PREVIEW_FIELDS = gql`
  fragment PostPreviewFields on Post {
    slug
    annotation
    cover
  }
`;

export const FRAGMENT_ALL_TAGS = gql`
  fragment AllTags on Query {
    allTags {
      tag
      count
    }
  }
`;

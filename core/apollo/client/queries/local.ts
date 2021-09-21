import { gql } from '@apollo/client';

export const LOCAL_POSTS_DATA = gql`
  query PostsData {
    posts @client
    lastId @client
  }
`;

export const LOCAL__POSTS = gql`
  query Posts {
    posts @client
  }
`;

export const LOCAL_LAST_ID = gql`
  query LastId {
    lastId @client
  }
`;

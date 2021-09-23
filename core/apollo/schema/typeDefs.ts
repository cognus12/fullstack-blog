import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Post {
    id: String!
    title: String!
    annotation: String!
    date: String!
    slug: String!
    views: Int
    cover: String
  }

  type PostsData {
    posts: [Post]!
    lastId: String
    hasMore: Boolean
  }

  type Query {
    getPosts(lastId: String): PostsData!
  }
`;

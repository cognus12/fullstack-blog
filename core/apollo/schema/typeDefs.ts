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
    loadedCount: Int
    lastId: String
    hasMore: Boolean
  }

  type Query {
    getPosts(loadedCount: Int, lastId: String): PostsData!
  }
`;

import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Tag {
    title: String
    href: String
  }

  type Post {
    id: String!
    title: String!
    annotation: String!
    date: String!
    slug: String!
    views: Int!
    cover: String
    tags: [Tag]
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

import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Post {
    id: String!
    title: String!
    date: String!
    views: Int!
    tags: [String]
    annotation: String!
    slug: String!
    cover: String
    content: String
  }

  type PostsData {
    posts: [Post]!
    loadedCount: Int
    lastId: String
    hasMore: Boolean
  }

  type Query {
    postsList(loadedCount: Int, lastId: String): PostsData!
    post(slug: String): Post
  }
`;

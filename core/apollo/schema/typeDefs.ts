import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Tag {
    title: String
    href: String
  }

  type Post {
    id: String!
    title: String!
    date: String!
    views: Int!
    tags: [Tag]
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

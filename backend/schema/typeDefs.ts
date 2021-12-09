import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  scalar Date

  type Post {
    id: String!
    title: String!
    postDate: Date!
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

  type HashTag {
    tag: String!
    count: Int
  }

  type Query {
    postList(loadedCount: Int, lastId: String, tag: String): PostsData!
    post(slug: String): Post
    allTags: [HashTag]!
  }

  type Mutation {
    incPostViews(id: String): Post!
  }
`;

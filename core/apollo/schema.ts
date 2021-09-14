import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Post {
    id: String!
    title: String!
    annotation: String!
    date: String!
    slug: String!
    views: Int
  }

  type PostData {
    posts: [Post]!
    lastId: String
  }

  type Query {
    getPosts: PostData!
  }
`;

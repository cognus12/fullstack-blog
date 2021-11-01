import { InMemoryCache } from '@apollo/client';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        postList: {
          keyArgs: () => 'Post',
          merge(existing = { posts: [], lastId: null, loadedCount: 0 }, incoming) {
            return {
              lastId: incoming.lastId,
              loadedCount: incoming.loadedCount,
              hasMore: incoming.hasMore,
              posts: [...existing.posts, ...incoming.posts],
            };
          },
        },
        post: {
          keyArgs: () => 'Post',
        },
      },
    },
  },
});

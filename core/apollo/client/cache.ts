import { InMemoryCache, makeVar } from '@apollo/client';

export const lastIdVar = makeVar(undefined);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getPosts: {
          keyArgs: () => 'postsData',
          merge(existing = { posts: [], lastId: null, loadedCount: 0 }, incoming) {
            return {
              lastId: incoming.lastId,
              loadedCount: incoming.loadedCount,
              hasMore: incoming.hasMore,
              posts: [...existing.posts, ...incoming.posts],
            };
          },
        },
      },
    },
  },
});

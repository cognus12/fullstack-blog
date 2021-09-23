import { InMemoryCache, makeVar } from '@apollo/client';

export const lastIdVar = makeVar(undefined);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getPosts: {
          keyArgs: () => 'postsData',
          merge(existing = { posts: [], lastId: null }, incoming) {
            return {
              lastId: incoming.lastId,
              posts: [...existing.posts, ...incoming.posts],
            };
          },
        },
      },
    },
  },
});

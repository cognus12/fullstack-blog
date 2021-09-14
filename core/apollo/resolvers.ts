export const resolvers = {
  Query: {
    getPosts: () => {
      return {
        posts: [
          {
            id: '1',
            title: 'First post',
          },
        ],
      };
    },
  },
};

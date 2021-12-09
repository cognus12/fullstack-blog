import { dateScalar } from './scalars/dateScalar';
import { GetOnePostArgs, GraphQLSeverContext, IncrementViewsArgs, PostsListArgs } from './interfaces';

export const resolvers = {
  Date: dateScalar,
  Query: {
    postList: async (parent: unknown, args: PostsListArgs, context: GraphQLSeverContext) => {
      const { dataLoader } = context;

      try {
        return await dataLoader.postList(args);
      } catch (err) {
        return { posts: [], loadedCount: 0 };
      }
    },
    post: async (parent: unknown, args: GetOnePostArgs, context: GraphQLSeverContext) => {
      const { dataLoader } = context;

      try {
        return await dataLoader.post(args);
      } catch (err) {
        return null;
      }
    },
    allTags: async (parent: unknown, args: unknown, context: GraphQLSeverContext) => {
      const { dataLoader } = context;

      try {
        return await dataLoader.allTags();
      } catch (err) {
        return [];
      }
    },
  },
  Mutation: {
    incPostViews: async (parent: unknown, args: IncrementViewsArgs, context: GraphQLSeverContext) => {
      const { dataLoader } = context;

      return await dataLoader.incPostViews(args);
    },
  },
};

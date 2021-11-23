import { FullPostDTO } from '../../../contracts/PostDTO';
import { dateScalar } from './scalars/dateScalar';
import { GraphQLSeverContext } from './interfaces';

export interface PostsListArgs {
  lastId: FullPostDTO['id'];
  loadedCount: number;
  tag?: string;
}

export interface GetOnePostArgs {
  slug: string;
}

export interface IncrementViewsArgs {
  id: string;
}

export const resolvers = {
  Date: dateScalar,
  Query: {
    postList: async (parent: unknown, args: PostsListArgs, context: GraphQLSeverContext) => {
      const { lastId, loadedCount, tag } = args;
      const { postService } = context;

      try {
        return await postService.getAll(loadedCount, { lastId, tag });
      } catch (err) {
        console.error(err.message);
        return { posts: [], loadedCount: 0 };
      }
    },
    post: async (parent: unknown, args: GetOnePostArgs, context: GraphQLSeverContext) => {
      const { slug } = args;
      const { postService } = context;

      try {
        return await postService.getOne(slug as string);
      } catch (err) {
        console.error(err.message);
        return null;
      }
    },
    allTags: async (parent: unknown, args: unknown, context: GraphQLSeverContext) => {
      const { postService } = context;

      try {
        return await postService.getAllTags();
      } catch (err) {
        console.error(err.message);
        return [];
      }
    },
  },
  Mutation: {
    incPostViews: async (parent: unknown, args: IncrementViewsArgs, context: GraphQLSeverContext) => {
      const { postService } = context;
      const { id } = args;

      try {
        return await postService.incrementViews(id);
      } catch (err) {
        console.error(err.message);
      }
    },
  },
};

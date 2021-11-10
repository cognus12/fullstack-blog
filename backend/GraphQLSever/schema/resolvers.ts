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

      return await postService.getAll(loadedCount, { lastId, tag });
    },
    post: async (parent: unknown, args: GetOnePostArgs, context: GraphQLSeverContext) => {
      const { slug } = args;
      const { postService } = context;

      return await postService.getOne(slug as string);
    },
    allTags: async (parent: unknown, args: unknown, context: GraphQLSeverContext) => {
      const { postService } = context;

      return await postService.getAllTags();
    },
  },
  Mutation: {
    incPostViews: async (parent: unknown, args: IncrementViewsArgs, context: GraphQLSeverContext) => {
      const { postService } = context;
      const { id } = args;

      return await postService.incrementViews(id);
    },
  },
};

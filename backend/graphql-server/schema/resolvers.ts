import { FullPostDTO } from '../../db/interfaces/post-repo';
import { postsRepo } from '../../db';

export interface PostsListArgs {
  lastId: FullPostDTO['id'];
  loadedCount: number;
}

export interface GetOnePostArgs {
  slug: string;
}

export const resolvers = {
  Query: {
    postsList: async (_: unknown, _args: PostsListArgs) => {
      const { lastId, loadedCount } = _args;

      return await postsRepo.getAll(loadedCount, lastId);
    },
    post: async (_: unknown, _args: GetOnePostArgs) => {
      const { slug } = _args;

      return await postsRepo.getOne(slug as string);
    },
    allTags: async () => {
      return await postsRepo.getAllTags();
    },
  },
};

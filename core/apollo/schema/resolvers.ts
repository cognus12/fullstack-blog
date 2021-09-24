import { FullPostDTO } from '../../db/interfaces/post';
import { postsRepo } from '../../db';

export interface GetPostsArgs {
  lastId: FullPostDTO['id'];
  loadedCount: number;
}

export const resolvers = {
  Query: {
    getPosts: async (_: unknown, _args: GetPostsArgs) => {
      const { lastId, loadedCount } = _args;

      return await postsRepo.getAll(loadedCount, lastId);
    },
  },
};

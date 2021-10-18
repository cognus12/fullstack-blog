import { postsRepo } from '../../db';
import { FullPostDTO } from '../../../contracts/PostDTO';

export interface PostsListArgs {
  lastId: FullPostDTO['id'];
  loadedCount: number;
  tag?: string;
}

export interface GetOnePostArgs {
  slug: string;
}

export const resolvers = {
  Query: {
    postsList: async (_: unknown, _args: PostsListArgs) => {
      const { lastId, loadedCount, tag } = _args;

      return await postsRepo.getAll(loadedCount, { lastId, tag });
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

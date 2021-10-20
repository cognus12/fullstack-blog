import { FullPostDTO } from '../../../contracts/PostDTO';
import { postService } from '../../services/PostService';

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

      return await postService.getAll(loadedCount, { lastId, tag });
    },
    post: async (_: unknown, _args: GetOnePostArgs) => {
      const { slug } = _args;

      return await postService.getOne(slug as string);
    },
    allTags: async () => {
      return await postService.getAllTags();
    },
  },
};

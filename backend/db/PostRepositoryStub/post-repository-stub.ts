import { stubGetAllTags, stubGetPost, stubGetPostsList } from './stub/stubs';
import { GetAllMethod, GetAllTagsMethod, GetOneMethod, PostRepositoryBase } from '../PostRepositoryBase';

export class PostRepositoryStub extends PostRepositoryBase {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getAll: GetAllMethod = async (loadedCount = 0, args = {}) => {
    const { tag } = args;

    const posts = await stubGetPostsList(tag);

    return {
      posts,
      hasMore: true,
      loadedCount: 10,
      lastId: '8',
    };
  };

  getOne: GetOneMethod = async (slug) => {
    return await stubGetPost(slug);
  };

  getAllTags: GetAllTagsMethod = async () => await stubGetAllTags();
}

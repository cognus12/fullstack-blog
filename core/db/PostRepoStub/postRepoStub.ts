import { stubGetPost, stubGetPostsList } from './stub/stubs';
import { FullPostDTO, PostRepoStruct, PostsDataDTO } from '../interfaces/post';

export class PostsRepoStub implements PostRepoStruct {
  getAll = async (): Promise<PostsDataDTO> => {
    const posts = await stubGetPostsList();

    return {
      posts,
      hasMore: false,
      loadedCount: 10,
      lastId: '8',
    };
  };

  getOne = async (slug: string): Promise<FullPostDTO | undefined> => {
    return await stubGetPost(slug);
  };
}

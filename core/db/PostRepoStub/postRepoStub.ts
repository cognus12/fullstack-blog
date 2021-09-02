import { stubGetPost, stubGetPostsList } from './stub/stubs';
import { FullPostDTO, PostRepoStruct, PostsList } from '../interfaces/post';

export class PostsRepoStub implements PostRepoStruct {
  connect = async (): Promise<void> => {
    await Promise.resolve();
  };

  getAll = async (): Promise<PostsList> => {
    return await stubGetPostsList();
  };

  getOne = async (slug: string): Promise<FullPostDTO | undefined> => {
    return await stubGetPost(slug);
  };
}

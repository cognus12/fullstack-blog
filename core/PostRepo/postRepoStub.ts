import { stubGetPost, stubGetPostsList } from './stub/stubs';
import { PostContentDTO, PostRepoStruct, PostsList } from '../../interfaces/post';

export class PostsRepoStub implements PostRepoStruct {
  connect = async (): Promise<void> => {
    await Promise.resolve();
  };

  getAll = async (): Promise<PostsList> => {
    return await stubGetPostsList();
  };

  getOne = async (id: string): Promise<PostContentDTO | undefined> => {
    return await stubGetPost(id);
  };
}

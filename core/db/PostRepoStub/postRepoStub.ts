import { stubGetPost, stubGetPostsList } from './stub/stubs';
import { FullPostDTO, PostRepoStruct, PostsList } from '../interfaces/post';

export class PostsRepoStub implements PostRepoStruct {
  getAll = async (): Promise<PostsList> => {
    return await stubGetPostsList();
  };

  getOne = async (slug: string): Promise<FullPostDTO | undefined> => {
    return await stubGetPost(slug);
  };
}

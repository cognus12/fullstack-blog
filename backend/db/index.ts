import { PostsRepoStub } from './PostRepoStub';
import { PostRepoMongo } from './postRepoMongo';
import { PostRepoStruct } from './interfaces/post-repo';

const mode = process.env.DB_MODE || 'stub';

export interface PostRepoMode {
  [key: string]: () => PostRepoStruct;
}

const postRepoMode: PostRepoMode = {
  stub: () => new PostsRepoStub(),
  mongo: () => new PostRepoMongo(),
};

export const postsRepo = postRepoMode[mode]();

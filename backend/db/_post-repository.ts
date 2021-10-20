import { PostRepositoryStub } from './PostRepositoryStub';
import { PostRepositoryMongodb } from './PostRepositoryMongoDB';
import { PostRepository } from './PostRepositoryBase';

const mode = process.env.DB_MODE || 'stub';

export interface PostRepoMode {
  [key: string]: () => PostRepository;
}

const postRepositoryMode: PostRepoMode = {
  stub: () => new PostRepositoryStub(),
  mongo: () => new PostRepositoryMongodb(),
};

export const postRepository = postRepositoryMode[mode]();

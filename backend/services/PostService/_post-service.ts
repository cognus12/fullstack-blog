import { GetAllMethod, GetAllTagsMethod, GetOneMethod, PostRepositoryBase } from '../../db/PostRepositoryBase';
import { postRepository } from '../../db';

export class PostService extends PostRepositoryBase {
  private _repository: PostRepositoryBase;

  constructor(repository: PostRepositoryBase) {
    super();
    this._repository = repository;
  }

  public getAll: GetAllMethod = async (loadedCount = 0, args = {}) => {
    return await this._repository.getAll(loadedCount, args);
  };

  public getOne: GetOneMethod = async (slug) => {
    return await this._repository.getOne(slug);
  };

  public getAllTags: GetAllTagsMethod = async () => {
    return await this._repository.getAllTags();
  };
}

export const postService = new PostService(postRepository);

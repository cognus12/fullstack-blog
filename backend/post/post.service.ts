import { IPostRepository } from './post.repository';
import { GetOnePostMethod, GetPostsMethod, IncrementPostViewsMethod, IPostService } from './post.service.interface';

export class PostService implements IPostService {
  private _repository: IPostRepository;

  constructor(repository: IPostRepository) {
    this._repository = repository;
  }

  public getPosts: GetPostsMethod = async (loadedCount = 0, args = {}) => {
    return await this._repository.find(loadedCount, args);
  };

  public getOnePost: GetOnePostMethod = async (slug) => {
    return await this._repository.findOne(slug);
  };

  public incrementPostViews: IncrementPostViewsMethod = async (id) => {
    return await this._repository.incrementViews(id);
  };
}

import { FullPostDTO, PostsDataDTO } from '../../common/contracts/PostDTO';
import { IPostRepository } from './post.repository';

export interface GetAllArgs {
  lastId?: FullPostDTO['id'];
  tag?: string;
}

export type GetPostsMethod = (loadedCount: number, args?: GetAllArgs) => Promise<PostsDataDTO>;
export type GetOnePostMethod = (slug: FullPostDTO['slug']) => Promise<FullPostDTO | null>;
export type IncrementPostViewsMethod = (id: string) => Promise<FullPostDTO>;

export interface IPostService {
  getPosts: GetPostsMethod;
  getOnePost: GetOnePostMethod;
  incrementPostViews: IncrementPostViewsMethod;
}

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

import { FullPostDTO, PostsDataDTO } from '../../common/contracts/PostDTO';
import { HashTagDTO } from '../../common/contracts/HashTagDTO';

export interface GetAllArgs {
  lastId?: FullPostDTO['id'];
  tag?: string;
}

export type GetPostsMethod = (loadedCount: number, args?: GetAllArgs) => Promise<PostsDataDTO>;
export type GetOnePostMethod = (slug: FullPostDTO['slug']) => Promise<FullPostDTO | undefined>;
export type GetTagsMethod = () => Promise<HashTagDTO[]>;
export type IncrementPostViewsMethod = (id: string) => Promise<FullPostDTO>;

export interface PostRepository {
  getPosts: GetPostsMethod;
  getOnePost: GetOnePostMethod;
  getTags: GetTagsMethod;
  incrementPostViews: IncrementPostViewsMethod;
}

export class PostService {
  private _repository: any;

  constructor(repository: any) {
    this._repository = repository;
  }

  public getPosts: GetPostsMethod = async (loadedCount = 0, args = {}) => {
    return await this._repository.getAll(loadedCount, args);
  };

  public getOnePost: GetOnePostMethod = async (slug) => {
    return await this._repository.getOne(slug);
  };

  public getTags: GetTagsMethod = async () => {
    return await this._repository.getAllTags();
  };

  public incrementPostViews: IncrementPostViewsMethod = async (id) => {
    return await this._repository.incrementViews(id);
  };
}

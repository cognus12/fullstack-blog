import { FullPostDTO, PostsDataDTO } from '../../../common/contracts/PostDTO';
import { HashTagDTO } from '../../../common/contracts/HashTagDTO';

export interface GetAllArgs {
  lastId?: FullPostDTO['id'];
  tag?: string;
}

export type GetAllMethod = (loadedCount: number, args?: GetAllArgs) => Promise<PostsDataDTO>;
export type GetOneMethod = (slug: FullPostDTO['slug']) => Promise<FullPostDTO | undefined>;
export type GetAllTagsMethod = () => Promise<HashTagDTO[]>;
export type IncrementViewsMethod = (id: string) => Promise<FullPostDTO>;

export interface PostRepository {
  getAll: GetAllMethod;
  getOne: GetOneMethod;
  getAllTags: GetAllTagsMethod;
  incrementViews: IncrementViewsMethod;
}

export abstract class PostRepositoryBase implements PostRepository {
  abstract getAll: GetAllMethod;

  abstract getOne: GetOneMethod;

  abstract getAllTags: GetAllTagsMethod;

  abstract incrementViews: IncrementViewsMethod;
}

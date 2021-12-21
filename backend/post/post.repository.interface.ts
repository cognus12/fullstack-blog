import { Filter, FindOptions } from 'mongodb';
import { FullPostDTO, PostsDataDTO } from '../../common/contracts/PostDTO';

export interface Document {
  [key: string]: any;
}

export interface FindAllQueryOptions {
  filter: Filter<Document>;
  options?: FindOptions;
}

export interface GetAllArgs {
  lastId?: FullPostDTO['id'];
  tag?: string;
}

export type FindOneMethod = (slug: string) => Promise<FullPostDTO | null>;
export type FindMethod = (loadedCount: number, args: GetAllArgs) => Promise<PostsDataDTO>;
export type IncrementViewsMethod = (id: string) => Promise<FullPostDTO>;

export interface IPostRepository {
  findOne: FindOneMethod;
  find: FindMethod;
  incrementViews: IncrementViewsMethod;
}

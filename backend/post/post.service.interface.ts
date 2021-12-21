import { FullPostDTO, PostsDataDTO } from '../../common/contracts/PostDTO';

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

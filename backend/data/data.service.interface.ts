import { GetOnePostArgs, IncrementViewsArgs, PostsListArgs } from '../schema/interfaces';
import { FullPostDTO, PostsDataDTO } from '../../common/contracts/PostDTO';
import { HashTagDTO } from '../../common/contracts/HashTagDTO';
import { IHashTagServie } from '../hash-tag/hash-tag.service.interface';
import { IPostService } from '../post/post.service.interface';

export interface DataLoaderOptions {
  postService: IPostService;
  hashTagService: IHashTagServie;
}

export interface IDataService {
  postList: (args: PostsListArgs) => Promise<PostsDataDTO>;
  post: (args: GetOnePostArgs) => Promise<FullPostDTO | null>;
  allTags: () => Promise<HashTagDTO[]>;
  incPostViews: (args: IncrementViewsArgs) => Promise<FullPostDTO>;
}

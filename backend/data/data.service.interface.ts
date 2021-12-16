import { GetOnePostArgs, IncrementViewsArgs, PostsListArgs } from '../schema/interfaces';
import { FullPostDTO, PostsDataDTO } from '../../common/contracts/PostDTO';
import { HashTagDTO } from '../../common/contracts/HashTagDTO';
import { IPostService } from '../post/post.service';

export interface DataLoaderOptions {
  postService: IPostService;
}

export interface IDataService {
  postList: (args: PostsListArgs) => Promise<PostsDataDTO>;
  post: (args: GetOnePostArgs) => Promise<FullPostDTO | null>;
  allTags: () => Promise<HashTagDTO[]>;
  incPostViews: (args: IncrementViewsArgs) => Promise<FullPostDTO>;
}

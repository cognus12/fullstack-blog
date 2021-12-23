import { FullPostDTO, PostsDataDTO } from '../../common/contracts/PostDTO';
import { GetOnePostArgs, IncrementViewsArgs, PostsListArgs } from '../schema/interfaces';
import { HashTagDTO } from '../../common/contracts/HashTagDTO';

import { DataLoaderOptions, IDataService } from './data.service.interface';
import { IHashTagServie } from '../hash-tag/hash-tag.service.interface';
import { IPostService } from '../post/post.service.interface';

export class DataService implements IDataService {
  private postService: IPostService;

  private hashTagService: IHashTagServie;

  constructor({ postService, hashTagService }: DataLoaderOptions) {
    this.postService = postService;
    this.hashTagService = hashTagService;
  }

  postList = async (args: PostsListArgs): Promise<PostsDataDTO> => {
    const { lastId, loadedCount, tag } = args;

    return this.postService.getPosts(loadedCount, { tag, lastId });
  };

  post = async (args: GetOnePostArgs): Promise<FullPostDTO | null> => {
    const { slug } = args;

    return this.postService.getOnePost(slug);
  };

  allTags = async (): Promise<HashTagDTO[]> => this.hashTagService.getTags();

  incPostViews = async (args: IncrementViewsArgs): Promise<FullPostDTO> => {
    const { id } = args;

    return this.postService.incrementPostViews(id);
  };
}

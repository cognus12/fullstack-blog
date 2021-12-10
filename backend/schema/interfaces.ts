import { FullPostDTO } from '../../common/contracts/PostDTO';
import { IDataService } from '../data/data.service';

export interface PostsListArgs {
  lastId: FullPostDTO['id'];
  loadedCount: number;
  tag?: string;
}

export interface GetOnePostArgs {
  slug: string;
}

export interface IncrementViewsArgs {
  id: string;
}

export interface GraphQLSeverContext {
  dataLoader: IDataService;
}

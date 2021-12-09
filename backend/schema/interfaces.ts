import { FullPostDTO } from '../../common/contracts/PostDTO';
import { IDataLoader } from '../data.loader';

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
  dataLoader: IDataLoader;
}

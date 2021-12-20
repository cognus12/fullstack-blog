import { IDataService } from './data.service.interface';
import { GetOnePostArgs, IncrementViewsArgs, PostsListArgs } from '../schema/interfaces';
import { FullPostDTO, PostsDataDTO, PostsList } from '../../common/contracts/PostDTO';
import { HashTagDTO } from '../../common/contracts/HashTagDTO';
import { takeLast } from '../../common/utils';
import { mockPosts } from './mocks/mockPosts';
import { getMockAllPosts, getMockAllTags, getMockOnePost, mockIncrementPostViews } from './mocks/utils';

export class MockDataService implements IDataService {
  postList = async (args: PostsListArgs): Promise<PostsDataDTO> => {
    const { lastId = '0', loadedCount = 0, tag } = args;

    const { posts, loadedCount: newLoadedCount } = await getMockAllPosts(loadedCount, { tag, lastId });

    return {
      posts,
      loadedCount: loadedCount + posts.length,
      lastId: takeLast(posts as PostsList)?.id,
      hasMore: newLoadedCount !== mockPosts.length,
    };
  };

  post = async (args: GetOnePostArgs): Promise<FullPostDTO | null> => {
    const { slug } = args;

    const post = await getMockOnePost(slug);

    return post || null;
  };

  allTags = async (): Promise<HashTagDTO[]> => {
    return getMockAllTags();
  };

  incPostViews = async (args: IncrementViewsArgs): Promise<FullPostDTO> => {
    const { id } = args;

    return mockIncrementPostViews(id);
  };
}

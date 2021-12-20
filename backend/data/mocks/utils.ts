import { FullPostDTO, PostsList } from '../../../common/contracts/PostDTO';
import { HashTagDTO } from '../../../common/contracts/HashTagDTO';
import { mockPosts } from './mockPosts';

const countByTag = (tag: string): number => mockPosts.filter((p) => p.tags && p.tags.includes(tag)).length;

const generateFakeTags = (posts: FullPostDTO[]) => {
  const rawTags = posts.reduce((acc, current) => {
    const currentTags = current.tags ? current.tags : [];
    return [...acc, ...currentTags];
  }, [] as string[]);

  return Array.from(new Set(rawTags)).map((tag) => ({ tag, count: countByTag(tag) }));
};

export const getMockAllPosts = (
  loadedCount: number,
  { tag, lastId }: { tag?: string; lastId?: string }
): Promise<{ posts: PostsList; loadedCount: number }> => {
  let result: PostsList = mockPosts;

  if (tag) {
    result = mockPosts.filter((p) => p.tags && p.tags.includes(`#${tag}`));
  }

  if (result.length === loadedCount) {
    return Promise.resolve({
      posts: [],
      loadedCount: mockPosts.length,
    });
  }

  result = result.filter((p) => Number(p.id) > Number(lastId));

  result = result.slice(0, 10);

  return Promise.resolve({
    posts: result,
    loadedCount: loadedCount + result.length,
  });
};

export const getMockOnePost = (slug: FullPostDTO['slug']): Promise<FullPostDTO | undefined> =>
  Promise.resolve(mockPosts.find((post) => post.slug === slug));

export const getMockAllTags = (): Promise<HashTagDTO[]> => Promise.resolve(generateFakeTags(mockPosts));

export const mockIncrementPostViews = (id: FullPostDTO['id']): Promise<FullPostDTO> => {
  const post = mockPosts.find((p) => p.id === id) as FullPostDTO;

  post.views += 1;

  return Promise.resolve(post);
};

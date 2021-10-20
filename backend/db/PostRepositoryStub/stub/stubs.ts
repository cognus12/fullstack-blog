import { HashTagDTO } from '../../../../contracts/HashTagDTO';
import { FullPostDTO, PostsList } from '../../../../contracts/PostDTO';

const fakePosts: FullPostDTO[] = [
  {
    id: '1',
    title: 'First post',
    annotation: 'Post annotation: some not very large text of few sentences',
    cover: 'post-cover-ex.jpg',
    tags: ['#example', '#react', '#nest'],
    content: '<p>This is <strong>first</strong> post</p>',
    date: '01.09.2021',
    views: 0,
    slug: 'first-post',
  },
  {
    id: '2',
    title: 'Second post',
    annotation: 'Post annotation: some not very large text of few sentences',
    cover: 'post-cover-ex.jpg',
    tags: ['#life'],
    content: '<p>This is <strong>second</strong> post</p><ul><li>item 1</li><li>item 2</li></ul>',
    date: '01.09.2021',
    views: 100,
    slug: 'second-post',
  },
  {
    id: '3',
    title: 'Third post',
    annotation: 'Post annotation: some not very large text of few sentences',
    cover: 'post-cover-ex.jpg',
    tags: ['#example', '#react', '#nest'],
    content: '<p>This is <strong>third</strong> post</p>',
    date: '01.09.2021',
    views: 1020,
    slug: 'third-post',
  },
  {
    id: '4',
    title: 'Fourth post',
    annotation: 'Post annotation: some not very large text of few sentences',
    cover: 'post-cover-ex.jpg',
    content: '<p>This is <strong>fourth</strong> post</p>',
    date: '01.09.2021',
    views: 400,
    slug: 'fourth-post',
  },
  {
    id: '5',
    title: 'Fifth post',
    annotation: 'Post annotation: some not very large text of few sentences',
    cover: 'post-cover-ex.jpg',
    tags: ['#example', '#react', '#nest'],
    content: '<p>This is <strong>first</strong> post</p>',
    date: '01.09.2021',
    views: 0,
    slug: 'fifth-post',
  },
  {
    id: '6',
    title: 'Sixth post',
    annotation: 'Post annotation: some not very large text of few sentences',
    cover: 'post-cover-ex.jpg',
    content: '<p>This is <strong>second</strong> post</p><ul><li>item 1</li><li>item 2</li></ul>',
    date: '01.09.2021',
    views: 100,
    slug: 'sixth-post',
  },
  {
    id: '7',
    title: 'Sevent post',
    annotation: 'Post annotation: some not very large text of few sentences',
    cover: 'post-cover-ex.jpg',
    tags: ['#example', '#react', '#nest'],
    content: '<p>This is <strong>third</strong> post</p>',
    date: '01.09.2021',
    views: 1020,
    slug: 'seventh-post',
  },
  {
    id: '8',
    title: 'Eight post',
    annotation: 'Post annotation: some not very large text of few sentences',
    cover: 'post-cover-ex.jpg',
    content: '<p>This is <strong>fourth</strong> post</p>',
    date: '01.09.2021',
    views: 400,
    slug: 'eight-post',
  },
];

const countByTag = (tag: string): number => fakePosts.filter((p) => p.tags && p.tags.includes(tag)).length;

const generateFakeTags = (posts: FullPostDTO[]) => {
  const rawTags = posts.reduce((acc, current) => {
    const currentTags = current.tags ? current.tags : [];
    return [...acc, ...currentTags];
  }, [] as string[]);

  return Array.from(new Set(rawTags)).map((tag) => ({ tag, count: countByTag(tag) }));
};

export const stubGetPostsList = (tag?: string): Promise<PostsList> => {
  if (tag) {
    return Promise.resolve(fakePosts.filter((p) => p.tags && p.tags.includes(`#${tag}`)));
  }

  return Promise.resolve(fakePosts);
};

export const stubGetPost = (slug: FullPostDTO['slug']): Promise<FullPostDTO | undefined> =>
  Promise.resolve(fakePosts.find((post) => post.slug === slug));

export const stubGetAllTags = (): Promise<HashTagDTO[]> => Promise.resolve(generateFakeTags(fakePosts));

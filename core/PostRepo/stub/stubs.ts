import { PostDTO, PostsList, PostContentDTO } from '../../../interfaces/post';

const fakePosts: PostsList = [
  {
    id: '1',
    title: 'First post',
    annotation: 'Post annotation: some not very large text of few sentences',
    cover: 'post-cover-ex.jpg',
    tags: [
      { title: '#example', href: '/' },
      { title: '#js', href: '/' },
      { title: '#golang', href: '/' },
    ],
  },
  {
    id: '2',
    title: 'Second post',
    annotation: 'Post annotation: some not very large text of few sentences',
    cover: 'post-cover-ex.jpg',
  },
  {
    id: '3',
    title: 'Third post',
    annotation: 'Post annotation: some not very large text of few sentences',
    cover: 'post-cover-ex.jpg',
    tags: [
      { title: '#example', href: '/' },
      { title: '#react', href: '/' },
      { title: '#nest', href: '/' },
    ],
  },
  {
    id: '4',
    title: 'Fourth post',
    annotation: 'Post annotation: some not very large text of few sentences',
    cover: 'post-cover-ex.jpg',
  },
  {
    id: '5',
    title: 'Fifth post',
    annotation: 'Post annotation: some not very large text of few sentences',
    cover: 'post-cover-ex.jpg',
    tags: [
      { title: '#example', href: '/' },
      { title: '#js', href: '/' },
      { title: '#golang', href: '/' },
    ],
  },
  {
    id: '6',
    title: 'Sixth post',
    annotation: 'Post annotation: some not very large text of few sentences',
    cover: 'post-cover-ex.jpg',
  },
  {
    id: '7',
    title: 'Sevent post',
    annotation: 'Post annotation: some not very large text of few sentences',
    cover: 'post-cover-ex.jpg',
    tags: [
      { title: '#example', href: '/' },
      { title: '#react', href: '/' },
      { title: '#nest', href: '/' },
    ],
  },
  {
    id: '8',
    title: 'Eight post',
    annotation: 'Post annotation: some not very large text of few sentences',
    cover: 'post-cover-ex.jpg',
  },
];

const fakePostsContent: Map<string, PostContentDTO> = new Map([
  [
    '1',
    {
      title: 'First post',
      content: '<p>This is <strong>first</strong> post</p>',
      date: '01.09.2021',
      views: 0,
    },
  ],
  [
    '2',
    {
      title: 'Second post',
      content: '<p>This is <strong>second</strong> post</p><ul><li>item 1</li><li>item 2</li></ul>',
      date: '01.09.2021',
      views: 100,
    },
  ],
  [
    '3',
    {
      title: 'Third post',
      content: '<p>This is <strong>third</strong> post</p>',
      date: '01.09.2021',
      views: 1020,
    },
  ],
  [
    '4',
    {
      title: 'Fourth post',
      content: '<p>This is <strong>fourth</strong> post</p>',
      date: '01.09.2021',
      views: 400,
    },
  ],
  [
    '5',
    {
      title: 'Fifth post',
      content: '<p>This is <strong>first</strong> post</p>',
      date: '01.09.2021',
      views: 0,
    },
  ],
  [
    '6',
    {
      title: 'Sixth post',
      content: '<p>This is <strong>second</strong> post</p><ul><li>item 1</li><li>item 2</li></ul>',
      date: '01.09.2021',
      views: 100,
    },
  ],
  [
    '7',
    {
      title: 'Seventh post',
      content: '<p>This is <strong>third</strong> post</p>',
      date: '01.09.2021',
      views: 1020,
    },
  ],
  [
    '8',
    {
      title: 'Eight post',
      content: '<p>This is <strong>fourth</strong> post</p>',
      date: '01.09.2021',
      views: 400,
    },
  ],
]);

export const stubGetPostsList = (): Promise<PostsList> => Promise.resolve(fakePosts);

export const stubGetPost = (id: PostDTO['id']): Promise<PostContentDTO | undefined> =>
  Promise.resolve(fakePostsContent.get(id));

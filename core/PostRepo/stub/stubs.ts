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
    title: 'First post',
    annotation: 'Post annotation: some not very large text of few sentences',
    cover: 'post-cover-ex.jpg',
  },
  {
    id: '3',
    title: 'First post',
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
    title: 'First post',
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
    },
  ],
  [
    '2',
    {
      title: 'Second post',
      content: '<p>This is <strong>second</strong> post</p>',
    },
  ],
  [
    '3',
    {
      title: 'Third post',
      content: '<p>This is <strong>third</strong> post</p>',
    },
  ],
  [
    '4',
    {
      title: 'Fourth post',
      content: '<p>This is <strong>fourth</strong> post</p>',
    },
  ],
]);

export const stubGetPostsList = (): Promise<PostsList> => Promise.resolve(fakePosts);

export const stubGetPost = (id: PostDTO['id']): Promise<PostContentDTO | undefined> =>
  Promise.resolve(fakePostsContent.get(id));

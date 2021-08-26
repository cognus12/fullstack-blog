import { PostDTO, PostsList, PostContentDTO } from '../../../interfaces/post';

const fakePosts: PostsList = [
  {
    id: '1',
    title: 'First post',
    annotation: 'some long text',
  },
  {
    id: '2',
    title: 'First post',
    annotation: 'some long text',
  },
  {
    id: '3',
    title: 'First post',
    annotation: 'some long text',
  },
  {
    id: '4',
    title: 'First post',
    annotation: 'some long text',
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

import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

export interface HashTagDTO {
  title: string;
  href: string;
}

export interface PostDTO {
  id: string;
  title: string;
  annotation: string;
  cover?: string;
  tags?: HashTagDTO[];
}

export type PostsList = PostDTO[];

export interface PostContentDTO extends Pick<PostDTO, 'title' | 'tags'> {
  content: string;
  date: string;
  views: number;
}

export interface PostParams extends ParsedUrlQuery {
  id: PostDTO['id'];
}

export interface PostCtx extends GetServerSideProps<ParsedUrlQuery> {
  params: PostParams;
}

export interface PostRepoStruct {
  connect: () => Promise<void>;
  getAll: () => Promise<PostsList>;
  getOne: (id: PostDTO['id']) => Promise<PostContentDTO | undefined>;
}

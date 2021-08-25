import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

export interface Post {
  id: string;
  title: string;
  annotation: string;
  cover?: string;
  tags?: string[];
}

export type PostsList = Post[];

export interface PostContent extends Pick<Post, 'title' | 'tags'> {
  content: string;
}

export interface PostParams extends ParsedUrlQuery {
  id: Post['id'];
}

export interface PostCtx extends GetServerSideProps<ParsedUrlQuery> {
  params: PostParams;
}

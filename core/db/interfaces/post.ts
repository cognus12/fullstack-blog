import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Db, MongoClient } from 'mongodb';

export interface HashTagDTO {
  title: string;
  href: string;
}

export interface FullPostDTO {
  id: string;
  title: string;
  annotation: string;
  content: string;
  date: string;
  slug: string;
  views?: number;
  cover?: string;
  tags?: HashTagDTO[];
}

export interface PostPreviewDTO extends Omit<FullPostDTO, 'views' | 'content'> {}

export type PostsList = PostPreviewDTO[];

export interface PostParams extends ParsedUrlQuery {
  id: FullPostDTO['id'];
}

export interface PostCtx extends GetServerSideProps<ParsedUrlQuery> {
  params: PostParams;
}

export type DbInstance = {
  client: MongoClient;
  db: Db;
};

export interface PostRepoStruct {
  getAll: (loadedCount: number, lastId?: FullPostDTO['id']) => Promise<PostsDataDTO>;
  getOne: (slug: FullPostDTO['slug']) => Promise<FullPostDTO | undefined>;
}

export interface PostsDataDTO {
  posts: PostsList;
  loadedCount: number;
  lastId?: string;
  hasMore?: boolean;
}

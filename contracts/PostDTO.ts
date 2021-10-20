export interface FullPostDTO {
  id: string;
  title: string;
  annotation: string;
  content: string;
  date: string;
  slug: string;
  views: number;
  cover?: string;
  tags?: string[];
}

export interface PostsDataDTO {
  posts: PostsList;
  loadedCount: number;
  lastId?: string;
  hasMore?: boolean;
}

export type PostsList = PostPreviewDTO[];

export interface PostPreviewDTO extends Omit<FullPostDTO, 'content'> {}

export interface FullPostDTO {
  id: string;
  title: string;
  annotation: string;
  content: string;
  postDate: string;
  slug: string;
  views: number;
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

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

export type PostsList = PostPreviewDTO[];

export interface PostPreviewDTO extends Omit<FullPostDTO, 'content'> {}

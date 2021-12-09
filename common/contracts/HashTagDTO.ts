export interface HashTagDTO {
  tag: string;
  count?: number;
}

export interface HashTagUI extends Omit<HashTagDTO, 'count'> {
  href: string;
}

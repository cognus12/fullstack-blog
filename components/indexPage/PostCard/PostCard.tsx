import Link from 'next/link';
import React from 'react';
import {
  PostCardContent,
  PostCardTitle,
  PostCoverWrapper,
  PostRoot,
  PostHashTags,
  ReadMoreLink,
  PostCardInfo,
} from './styles';
import { HashTagUI, PostPreviewDTO } from '../../../backend/db/interfaces/post-repo';
import { ViewsCounter } from '../../shared/ViewsCounter';
import { formatHashTagToHref, formatHashTagToView } from '../../../helpers';

export interface PostCardProps extends PostPreviewDTO {}

const normalizeHashTags = (tags: string[]): HashTagUI[] =>
  tags.map((tag) => ({
    tag: formatHashTagToView(tag),
    href: `/search?tag=${formatHashTagToHref(tag)}`,
  }));

const PostCardInner: React.FC<PostCardProps> = ({ title, annotation, cover, tags, slug, date, views = 0 }) => {
  return (
    <PostRoot as="article">
      <PostCoverWrapper>
        <img src={cover} alt="Post cover" />
      </PostCoverWrapper>
      <PostCardContent>
        <PostCardTitle>{title}</PostCardTitle>
        <PostCardInfo>
          <span>{date}</span>
          <ViewsCounter views={views} />
        </PostCardInfo>
        {tags && <PostHashTags tags={normalizeHashTags(tags)} />}
        <p>{annotation}</p>
        <Link href={`/post/${slug}`} passHref>
          <ReadMoreLink>Read more</ReadMoreLink>
        </Link>
      </PostCardContent>
    </PostRoot>
  );
};

export const PostCard = React.memo(PostCardInner);

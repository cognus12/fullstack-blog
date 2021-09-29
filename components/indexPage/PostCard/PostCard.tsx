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
import { PostPreviewDTO } from '../../../core/db/interfaces/post';
import { ViewsCounter } from '../../shared/ViewsCounter';

export interface PostCardProps extends PostPreviewDTO {}

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
        {tags && <PostHashTags tags={tags} />}
        <p>{annotation}</p>
        <Link href={`/post/${slug}`} passHref>
          <ReadMoreLink>Read more</ReadMoreLink>
        </Link>
      </PostCardContent>
    </PostRoot>
  );
};

export const PostCard = React.memo(PostCardInner);

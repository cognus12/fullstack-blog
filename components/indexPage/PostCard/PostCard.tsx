import Link from 'next/link';
import React from 'react';
import { PostCardInfo, PostCardTitle, PostCoverWrapper, PostRoot, PostHashTags, ReadMoreLink } from './styles';
import { PostPreviewDTO } from '../../../core/db/interfaces/post';

export interface PostCardProps extends PostPreviewDTO {}

export const PostCard: React.FC<PostCardProps> = ({ title, annotation, cover, tags, slug }) => {
  return (
    <PostRoot>
      <PostCoverWrapper>
        <img src={cover} alt="Post cover" />
      </PostCoverWrapper>
      <PostCardInfo>
        {tags && <PostHashTags tags={tags} />}
        <PostCardTitle>{title}</PostCardTitle>
        <p>{annotation}</p>
        <Link href={`/post/${slug}`} passHref>
          <ReadMoreLink>Read more</ReadMoreLink>
        </Link>
      </PostCardInfo>
    </PostRoot>
  );
};

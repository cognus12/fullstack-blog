import Link from 'next/link';
import React from 'react';
import { PostCardInfo, PostCardTitle, PostCoverWrapper, PostRoot, PostHashTags, ReadMoreLink } from './styles';
import { PostDTO } from '../../../interfaces/post';

export interface PostCardProps extends PostDTO {}

export const PostCard: React.FC<PostCardProps> = ({ id, title, annotation, cover, tags }) => {
  return (
    <PostRoot>
      <PostCoverWrapper>
        <img src={cover} alt="Post cover" />
      </PostCoverWrapper>
      <PostCardInfo>
        {tags && <PostHashTags tags={tags} />}
        <PostCardTitle>{title}</PostCardTitle>
        <p>{annotation}</p>
        <Link href={`/post/${id}`}>
          <ReadMoreLink>Read more</ReadMoreLink>
        </Link>
      </PostCardInfo>
    </PostRoot>
  );
};

import Link from 'next/link';
import React from 'react';
import { PostCardInfo, PostCardTitle, PostCoverWrapper, PostRoot, ReadMoreLink, Tags, Tag } from './styles';
import { PostDTO } from '../../../interfaces/post';

export interface PostCardProps extends PostDTO {}

export const PostCard: React.FC<PostCardProps> = () => {
  return (
    <PostRoot>
      <PostCoverWrapper>
        <img src="post-cover-ex.jpg" />
      </PostCoverWrapper>
      <PostCardInfo>
        <Tags flexProps={{ columnGap: '5px', flexWrap: 'wrap' }}>
          <Tag>#example</Tag>
          <Tag>#code</Tag>
          <Tag>#development</Tag>
        </Tags>
        <PostCardTitle>Post title</PostCardTitle>
        <p>Post annotation: some not very large text of few sentences</p>
        <Link href="/">
          <ReadMoreLink>Read more</ReadMoreLink>
        </Link>
      </PostCardInfo>
    </PostRoot>
  );
};

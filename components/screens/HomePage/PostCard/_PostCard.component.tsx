import Link from 'next/link';
import React from 'react';
import { PostCardContent, PostCardTitle, PostRoot, PostHashTags, ReadMoreLink, PostCardInfo } from './_PostCard.styles';
import { PostViews } from '../../../common/PostViews/_PostViews.component';
import { PostPreviewDTO } from '../../../../common/contracts/PostDTO';
import { DateView } from '../../../common/DateView';

export interface PostCardProps extends PostPreviewDTO {}

const PostCardInner: React.FC<PostCardProps> = ({ title, annotation, tags, slug, postDate, views = 0 }) => {
  return (
    <PostRoot as="article">
      <PostCardContent>
        <PostCardTitle>{title}</PostCardTitle>
        <PostCardInfo>
          <DateView date={postDate} />
          <PostViews views={views} />
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

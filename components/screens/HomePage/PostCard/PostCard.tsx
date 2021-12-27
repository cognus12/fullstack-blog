import Link from 'next/link';
import React from 'react';
import { PostViews } from '../../../common/PostViews';
import { PostPreviewDTO } from '../../../../common/contracts/PostDTO';
import { DateView } from '../../../common/DateView';
import { HashTags } from '../../../common/HashTags';

export interface PostCardProps extends PostPreviewDTO {}

const PostCardInner: React.FC<PostCardProps> = ({ title, annotation, tags, slug, postDate, views = 0 }) => {
  return (
    <article className="bg-zinc-900 rounded-[15px]">
      <div className="p-[20px]">
        <h2>{title}</h2>
        <div className="flex gap-x-[20px] items-center">
          <DateView date={postDate} />
          <PostViews views={views} />
        </div>
        {tags && tags.length > 0 && <HashTags tags={tags} className="my-[10px]" />}
        <p>{annotation}</p>
        <Link href={`/post/${slug}`} passHref>
          <a className="font-bold hover:text-emerald-600">Read more</a>
        </Link>
      </div>
    </article>
  );
};

export const PostCard = React.memo(PostCardInner);

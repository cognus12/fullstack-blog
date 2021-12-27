import React from 'react';

import { FullPostDTO } from '../../../../../common/contracts/PostDTO';
import { DateView } from '../../../../common/DateView';
import { ViewsCounter } from './ViewsCounter';
import { ContentRenderer } from './ContentRenderer';

export interface PostArticleProps extends Pick<FullPostDTO, 'title' | 'content' | 'postDate' | 'views'> {}

export const PostArticle: React.FC<PostArticleProps> = ({ title, content, postDate, views }) => {
  return (
    <article className="bg-zinc-900 p-[20px] rounded-[15px] max-w-[1000px]">
      <h1>{title}</h1>
      <div className="flex gap-x-[20px] w-[250px] mt-[10px]">
        <DateView date={postDate} />
        <ViewsCounter views={views} />
      </div>
      <ContentRenderer content={content} />
    </article>
  );
};

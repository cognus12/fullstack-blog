import React from 'react';

import { Article, ArticleInfo, PostContent } from './_PostArticle.styles';
import { FullPostDTO } from '../../../../../contracts/PostDTO';
import { ViewsCounter } from '../../../../common/ViewsCounter/_ViewsCounter.component';
import { DateView } from '../../../../common/DateView';

export interface PostArticleProps extends FullPostDTO {}

export const PostArticle: React.FC<PostArticleProps> = ({ title, content, postDate, views }) => {
  return (
    <Article>
      <h1>{title}</h1>
      <ArticleInfo>
        <DateView date={postDate} />
        <ViewsCounter views={views} />
      </ArticleInfo>
      <PostContent dangerouslySetInnerHTML={{ __html: content }} />
    </Article>
  );
};

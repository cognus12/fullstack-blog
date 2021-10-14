import React from 'react';

import { Article, ArticleInfo, PostContent } from './PostArticle.styles';
import { FullPostDTO } from '../../../../contracts/PostDTO';
import { ViewsCounter } from '../../../common/ViewsCounter/ViewsCounter';

export interface PostArticleProps extends FullPostDTO {}

export const PostArticle: React.FC<PostArticleProps> = ({ title, content, date, views }) => {
  return (
    <Article>
      <h1>{title}</h1>
      <ArticleInfo>
        <span>{date}</span>
        <ViewsCounter views={views} />
      </ArticleInfo>
      <PostContent dangerouslySetInnerHTML={{ __html: content }} />
    </Article>
  );
};

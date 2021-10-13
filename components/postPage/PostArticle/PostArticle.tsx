import React from 'react';
import { FullPostDTO } from '../../../backend/db/interfaces/post-repo';
import { ViewsCounter } from '../../shared/ViewsCounter';
import { Article, ArticleInfo, PostContent } from './styles';

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

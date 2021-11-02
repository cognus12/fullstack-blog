import React from 'react';

import { Article, ArticleInfo, PostContent } from './_PostArticle.styles';
import { FullPostDTO } from '../../../../../contracts/PostDTO';
import { PostViews } from '../../../../common/PostViews/_PostViews.component';
import { DateView } from '../../../../common/DateView';

export interface PostArticleProps extends FullPostDTO {}

export const PostArticle: React.FC<PostArticleProps> = ({ title, content, postDate, views }) => {
  return (
    <Article>
      <h1>{title}</h1>
      <ArticleInfo>
        <DateView date={postDate} />
        <PostViews views={views} />
      </ArticleInfo>
      <PostContent dangerouslySetInnerHTML={{ __html: content }} />
    </Article>
  );
};

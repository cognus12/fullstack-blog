import React from 'react';
import { PostContentDTO } from '../../../interfaces/post';
import styled from 'styled-components';
import { FlexContainer } from '../../layout/shared';

export interface PostArticleProps extends PostContentDTO {}

const Article = styled.article`
  background: ${({ theme }) => theme.colors.secondaryBg};
  padding: 20px;
  border-radius: 15px;
  max-width: 1000px;
`;

const ArticleInfo = styled(FlexContainer)`
  margin-top: 10px;
  width: 250px;
`;

export const PostArticle: React.FC<PostArticleProps> = ({ title, content, date, views }) => {
  return (
    <Article>
      <ArticleInfo flexProps={{ justifyContent: 'space-between' }}>
        <span>Date: {date}</span>
        <span>Views: {views}</span>
      </ArticleInfo>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Article>
  );
};

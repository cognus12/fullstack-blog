import React from 'react';

import { Article, ArticleInfo, PostContent } from './_PostArticle.styles';
import { FullPostDTO } from '../../../../../contracts/PostDTO';
import { PostViews } from '../../../../common/PostViews/_PostViews.component';
import { DateView } from '../../../../common/DateView';
import { useMutationIncPostViews } from '../../../../../core/graphql-client/gql/hooks/useMutationIncPostViews';

export interface PostArticleProps extends FullPostDTO {}

export interface ViewsCounterProps extends Pick<FullPostDTO, 'id' | 'views'> {}

const ViewsCounter: React.FC<ViewsCounterProps> = ({ id, views }) => {
  const { incViews } = useMutationIncPostViews();

  React.useEffect(() => {
    incViews({ variables: { id } });
  }, []);

  return <PostViews views={views} />;
};

export const PostArticle: React.FC<PostArticleProps> = ({ title, content, postDate, views, id }) => {
  return (
    <Article>
      <h1>{title}</h1>
      <ArticleInfo>
        <DateView date={postDate} />
        <ViewsCounter views={views} id={id} />
      </ArticleInfo>
      <PostContent dangerouslySetInnerHTML={{ __html: content }} />
    </Article>
  );
};

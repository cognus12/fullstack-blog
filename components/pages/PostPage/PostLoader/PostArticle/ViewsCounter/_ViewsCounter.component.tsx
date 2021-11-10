import React from 'react';
import { FullPostDTO } from '../../../../../../contracts/PostDTO';
import { PostViews } from '../../../../../common/PostViews/_PostViews.component';
import { usePostViewsCounter } from './hooks/usePostViewsCounter';

export interface ViewsCounterProps extends Pick<FullPostDTO, 'views'> {}

export const ViewsCounter: React.FC<ViewsCounterProps> = ({ views }) => {
  usePostViewsCounter();

  return <PostViews views={views} />;
};

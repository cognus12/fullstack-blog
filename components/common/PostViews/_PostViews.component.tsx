import React from 'react';
import { PostViewsRoot, PostViewsEyeIcon } from './_PostViews.style';

export interface ViewsCounterProps {
  views: number;
}

export const PostViews: React.FC<ViewsCounterProps> = ({ views = 0 }) => {
  return (
    <PostViewsRoot>
      <PostViewsEyeIcon />
      <span>{views}</span>
    </PostViewsRoot>
  );
};

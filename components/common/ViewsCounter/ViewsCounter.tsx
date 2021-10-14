import React from 'react';
import { ViewsCounterRoot, ViewsEyeIcon } from './ViewsCounter.style';

export interface ViewsCounterProps {
  views: number;
}

export const ViewsCounter: React.FC<ViewsCounterProps> = ({ views = 0 }) => {
  return (
    <ViewsCounterRoot>
      <ViewsEyeIcon />
      <span>{views}</span>
    </ViewsCounterRoot>
  );
};

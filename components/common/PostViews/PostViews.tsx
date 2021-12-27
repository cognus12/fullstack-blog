import React from 'react';
import { EyeIcon } from '../../svg/icons-tw';

export interface ViewsCounterProps {
  views: number;
}

export const PostViews: React.FC<ViewsCounterProps> = ({ views = 0 }) => {
  return (
    <div className="flex items-center gap-[10px]">
      <EyeIcon className="w-[20px] h-[20px] fill-gray-400" />
      <span>{views}</span>
    </div>
  );
};

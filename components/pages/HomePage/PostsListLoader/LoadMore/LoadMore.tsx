import React from 'react';
import { LoadMoreButton } from './LoadMore.style';

export interface LoadMoreProps {
  fetcher: () => void;
}

export const LoadMore: React.FC<LoadMoreProps> = ({ fetcher }) => {
  return <LoadMoreButton onClick={fetcher}>Load more</LoadMoreButton>;
};

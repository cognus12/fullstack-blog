import React from 'react';
import { LoadMoreButton } from './_LoadMore.style';

export interface LoadMoreProps {
  fetcher: () => void;
  loading?: boolean;
  error?: string;
}

export const LoadMore: React.FC<LoadMoreProps> = ({ fetcher, loading, error }) => {
  const isError = Boolean(error);

  const loader = <>...</>;

  return (
    <LoadMoreButton onClick={fetcher} isError={isError}>
      {loading ? loader : 'Load more'}
    </LoadMoreButton>
  );
};

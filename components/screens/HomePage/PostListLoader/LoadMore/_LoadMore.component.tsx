import React from 'react';
import { LoadMoreButton } from './_LoadMore.style';
import { Spinner } from './Spinner';
import { baseColors } from '../../../../../styles/theme';

export interface LoadMoreProps {
  fetcher: () => void;
  loading?: boolean;
  error?: string;
}

export const LoadMore: React.FC<LoadMoreProps> = ({ fetcher, loading, error }) => {
  const isError = Boolean(error);

  const Loader = () => <Spinner color={baseColors.green100} />;

  return (
    <LoadMoreButton onClick={fetcher} isError={isError}>
      {loading ? <Loader /> : 'Load more'}
    </LoadMoreButton>
  );
};

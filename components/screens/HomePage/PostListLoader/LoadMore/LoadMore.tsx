import React from 'react';
import { Spinner } from './Spinner';

export interface LoadMoreProps {
  fetcher: () => void;
  loading?: boolean;
  error?: string;
}

export const LoadMore: React.FC<LoadMoreProps> = ({ fetcher, loading }) => {
  //TODO handle error
  // const isError = Boolean(error);

  return (
    <button className="w-full p-[10px] rounded-[6px] h-[42px]" onClick={fetcher}>
      {loading ? <Spinner color="#09d3ac" /> : 'Load more'}
    </button>
  );
};

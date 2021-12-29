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
    <button className="bg-slate-500 w-full p-[10px] rounded-[6px] h-[42px]" onClick={fetcher}>
      {loading ? <Spinner color="#09d3ac" /> : 'Load more'}
    </button>
  );
};

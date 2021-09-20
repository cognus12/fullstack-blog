import { useQuery } from '@apollo/client';
import React from 'react';
import { LoadMoreButton } from './style';
import { LOCAL_LAST_ID } from '../../../../core/apollo/client';

export const LoadMore: React.FC = () => {
  const {
    data: { lastId },
  } = useQuery(LOCAL_LAST_ID);

  return <LoadMoreButton onClick={() => console.log(lastId)}>Load more</LoadMoreButton>;
};

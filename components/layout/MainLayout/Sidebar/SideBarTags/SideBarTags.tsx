import React from 'react';
import { HashTags } from '../../../../common/HashTags';
import { useQueryAllTags } from '../../../../../apollo';

export const SideBarTags: React.FC = () => {
  const { data, error } = useQueryAllTags();

  if (error || !data) {
    return null;
  }

  const { allTags } = data;

  return <HashTags tags={allTags} />;
};

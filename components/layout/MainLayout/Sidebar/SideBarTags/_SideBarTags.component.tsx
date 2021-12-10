import React from 'react';
import { HashTags } from '../../../../common/HashTags';
import { formatHashTagToHref, formatHashTagToView } from '../../../../../common/helpers';
import { HashTagDTO, HashTagUI } from '../../../../../common/contracts/HashTagDTO';
import { useQueryAllTags } from '../../../../../apollo';

const normalizeHashTags = (tags: HashTagDTO[]): HashTagUI[] =>
  tags.map(({ tag, count }) => ({
    tag: `${formatHashTagToView(tag)} ${count ? `(${count})` : ''}`,
    href: `/tags/${formatHashTagToHref(tag)}`,
  }));

export const SideBarTags: React.FC = () => {
  const { data, error } = useQueryAllTags();

  if (error || !data) {
    return null;
  }

  const { allTags } = data;

  const tags = normalizeHashTags(allTags);

  return <HashTags tags={tags} />;
};

import React from 'react';
import { HashTags } from '../../../../common/HashTags';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_TAGS } from '../../../../../core/graphql-client';
import { formatHashTagToHref, formatHashTagToView } from '../../../../../helpers';
import { HashTagDTO, HashTagUI } from '../../../../../contracts/HashTagDTO';

const normalizeHashTags = (tags: HashTagDTO[]): HashTagUI[] =>
  tags.map(({ tag, count }) => ({
    tag: `${formatHashTagToView(tag)} ${count ? `(${count})` : ''}`,
    href: `/tags/${formatHashTagToHref(tag)}`,
  }));

export const SideBarTags: React.FC = () => {
  const { data, error } = useQuery(QUERY_ALL_TAGS);

  if (error || !data) {
    return null;
  }

  const { allTags } = data;

  const tags = normalizeHashTags(allTags);

  return <HashTags tags={tags} />;
};

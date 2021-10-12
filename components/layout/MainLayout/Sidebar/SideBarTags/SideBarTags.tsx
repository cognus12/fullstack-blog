import React from 'react';
import { HashTags } from '../../../../shared/HashTags';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_TAGS } from '../../../../../core/apollo/client';
import { HashTagDTO, HashTagUI } from '../../../../../core/db/interfaces/post';
import { formatHashTagToHref, formatHashTagToView } from '../../../../../helpers';

const normalizeHashTags = (tags: HashTagDTO[]): HashTagUI[] =>
  tags.map(({ tag, count }) => ({
    tag: `${formatHashTagToView(tag)} ${count ? `(${count})` : ''}`,
    href: `/search?tag=${formatHashTagToHref(tag)}`,
  }));

export const SideBarTags: React.FC = () => {
  const {
    data: { allTags },
  } = useQuery(QUERY_ALL_TAGS);

  const tags = normalizeHashTags(allTags);

  return <HashTags tags={tags} />;
};

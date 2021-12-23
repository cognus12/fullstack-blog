import React from 'react';
import { HashTag } from './HashTag';
import { HashTagsWrapper } from './_HashTags.styles';
import { HashTagDTO } from '../../../common/contracts/HashTagDTO';
import { formatHashTags } from './_HashTags.utils';

export interface HashTagsProps {
  tags: HashTagDTO[] | string[];
  className?: string;
}

export const HashTags: React.FC<HashTagsProps> = ({ tags, className }) => {
  const tagsToRender = formatHashTags(tags).map(({ tag, href }) => <HashTag key={tag} tag={tag} href={href} />);

  return <HashTagsWrapper className={className}>{tagsToRender}</HashTagsWrapper>;
};

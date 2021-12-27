import React from 'react';
import { HashTagDTO } from '../../../common/contracts/HashTagDTO';
import { HashTag } from './HashTag';
import { formatHashTags } from './HashTags.utils';

export interface HashTagsProps {
  tags: HashTagDTO[] | string[];
  className?: string;
}

export const HashTags: React.FC<HashTagsProps> = ({ tags, className }) => {
  const tagsToRender = formatHashTags(tags).map(({ tag, href }) => <HashTag key={tag} tag={tag} href={href} />);

  const computedClassName = `flex flex-wrap gap-[5px] ${className}`;

  return <div className={computedClassName}>{tagsToRender}</div>;
};

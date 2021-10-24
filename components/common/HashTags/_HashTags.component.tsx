import React from 'react';
import { HashTag } from './HashTag';
import { HashTagsWrapper } from './_HashTags.styles';
import { HashTagUI } from '../../../contracts/HashTagDTO';

export interface HashTagsProps {
  tags: HashTagUI[];
  className?: string;
}

export const HashTags: React.FC<HashTagsProps> = ({ tags, className }) => {
  return (
    <HashTagsWrapper className={className}>
      {tags.map(({ tag, href }) => (
        <HashTag key={tag} tag={tag} href={href} />
      ))}
    </HashTagsWrapper>
  );
};

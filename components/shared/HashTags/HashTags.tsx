import React from 'react';
import { HashTag } from './HashTag';
import { HashTagsWrapper } from './styles';

export interface HashTagsProps {
  tags: string[];
  className?: string;
}

export const HashTags: React.FC<HashTagsProps> = ({ tags, className }) => {
  return (
    <HashTagsWrapper className={className}>
      {tags.map((tag) => (
        <HashTag key={tag} tag={tag} />
      ))}
    </HashTagsWrapper>
  );
};

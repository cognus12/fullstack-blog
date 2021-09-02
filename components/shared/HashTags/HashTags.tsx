import React from 'react';
import { HashTagDTO } from '../../../core/db/interfaces/post';
import { HashTag } from './HashTag';
import { HashTagsWrapper } from './styles';

export interface HashTagsProps {
  tags: HashTagDTO[];
  className?: string;
}

export const HashTags: React.FC<HashTagsProps> = ({ tags, className }) => {
  return (
    <HashTagsWrapper className={className}>
      {tags.map((tag) => (
        <HashTag key={tag.title} title={tag.title} href={tag.href} />
      ))}
    </HashTagsWrapper>
  );
};

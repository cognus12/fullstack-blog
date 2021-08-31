import React from 'react';
import { FlexContainer } from '../../layout/shared';
import { HashTagDTO } from '../../../interfaces/post';
import { HashTag } from './HashTag';

export interface HashTagsProps {
  tags: HashTagDTO[];
  className?: string;
}

export const HashTags: React.FC<HashTagsProps> = ({ tags, className }) => {
  return (
    <FlexContainer flexProps={{ columnGap: '5px', flexWrap: 'wrap', rowGap: '5px' }} className={className}>
      {tags.map((tag) => (
        <HashTag key={tag.title} title={tag.title} href={tag.href} />
      ))}
    </FlexContainer>
  );
};

import React from 'react';
import { HashTags } from '../../../../shared/HashTags';

const tags = [
  '#example',
  '#js',
  '#golang',
  '#node',
  '#life',
  '#react',
  '#ts',
  '#patterns',
  '#motivation',
  '#db',
  '#sql',
  '#python',
  '#material',
  '#angular',
  '#vue',
  '#svelt',
];

export interface SideBarTagsProps {}

const SideBarTagsView: React.FC<SideBarTagsProps> = () => {
  return <HashTags tags={tags} />;
};

export const SideBarTags = React.memo(SideBarTagsView);

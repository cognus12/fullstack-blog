import Link from 'next/link';
import React from 'react';
import { Tag } from './style';

export interface HashTagProps {
  tag: string;
}

const formatHashTagToView = (str: string): string => (str[0] === '#' ? str : `#${str}`);
const formatGashTagToHref = (str: string): string => (str[0] === '#' ? str.slice(1) : str);

export const HashTag: React.FC<HashTagProps> = ({ tag }) => (
  <Link href={`/search?tag=${formatGashTagToHref(tag)}`} passHref>
    <Tag>{formatHashTagToView(tag)}</Tag>
  </Link>
);

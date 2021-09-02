import Link from 'next/link';
import React from 'react';
import { Tag } from './style';
import { HashTagDTO } from '../../../../core/db/interfaces/post';

export interface HashTagProps extends HashTagDTO {}

const formatHashTag = (str: string): string => (str[0] === '#' ? str : `#${str}`);

export const HashTag: React.FC<HashTagProps> = ({ title, href }) => (
  <Link href={href}>
    <Tag>{formatHashTag(title)}</Tag>
  </Link>
);

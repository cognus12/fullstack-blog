import Link from 'next/link';
import React from 'react';
import { Tag } from './style';
import { HashTagUI } from '../../../../backend/db/interfaces/post-repo';

export interface HashTagProps extends HashTagUI {}

export const HashTag: React.FC<HashTagProps> = ({ tag, href }) => (
  <Link href={href} passHref>
    <Tag>{tag}</Tag>
  </Link>
);

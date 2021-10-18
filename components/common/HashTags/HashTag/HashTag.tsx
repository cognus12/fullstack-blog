import Link from 'next/link';
import React from 'react';
import { Tag } from './HashTag.style';
import { HashTagUI } from '../../../../contracts/HashTagDTO';

export interface HashTagProps extends HashTagUI {}

export const HashTag: React.FC<HashTagProps> = ({ tag, href }) => (
  <Link href={href} passHref>
    <Tag>{tag}</Tag>
  </Link>
);

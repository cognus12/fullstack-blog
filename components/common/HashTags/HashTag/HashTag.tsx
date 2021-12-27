import React from 'react';
import Link from 'next/link';
import { HashTagUI } from '../../../../common/contracts/HashTagDTO';

export interface HashTagProps extends HashTagUI {}

export const HashTag: React.FC<HashTagProps> = ({ tag, href }) => (
  <Link href={href} passHref>
    <a className="p-[5px] bg-slate-500 shrink-0 rounded-[5px]">{tag}</a>
  </Link>
);

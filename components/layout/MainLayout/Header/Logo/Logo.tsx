import React from 'react';
import Link from 'next/link';

export interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => (
  <div>
    <strong>
      <Link href="/" passHref>
        <a className="text-emerald-600 text-[24px] cursor-pointer uppercase">fullstack Blog</a>
      </Link>
    </strong>
  </div>
);

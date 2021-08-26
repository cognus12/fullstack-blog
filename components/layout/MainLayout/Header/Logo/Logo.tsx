import Link from 'next/link';
import React from 'react';
import { LogoText } from './styles';

export interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => (
  <div>
    <strong>
      <Link href="/">
        <LogoText>fullstack Blog</LogoText>
      </Link>
    </strong>
  </div>
);

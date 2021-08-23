import React from 'react';
import { LogoText } from './styles';

export interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => (
  <div>
    <LogoText>fullstack Blog</LogoText>
  </div>
);

import React from 'react';
import { HeaderInner, HeaderWrapper } from './styles';
import { Container } from '../../shared';
import { Logo } from './Logo';

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderInner>
          <Logo />
        </HeaderInner>
      </Container>
    </HeaderWrapper>
  );
};

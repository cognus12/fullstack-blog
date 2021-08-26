import React from 'react';
import { HeaderInner, HeaderWrapper } from './styles';
import { Container } from '../../shared';
import { Logo } from './Logo';

export interface HeaderProps {}

const HeaderView: React.FC<HeaderProps> = () => {
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

export const Header = React.memo(HeaderView);

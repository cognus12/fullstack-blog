import React from 'react';
import { HeaderInner, HeaderWrapper } from './Header.styles';
import { Logo } from './Logo';
import { Container } from '../../../../styles/containers';

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

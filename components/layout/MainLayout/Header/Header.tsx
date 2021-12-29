import React from 'react';
import { Logo } from './Logo';
import { Container } from '../../Container';

export interface HeaderProps {}

const HeaderView: React.FC<HeaderProps> = () => {
  return (
    <header className="bg-gray-800">
      <Container>
        <div className="flex py-[20px]">
          <Logo />
        </div>
      </Container>
    </header>
  );
};

export const Header = React.memo(HeaderView);

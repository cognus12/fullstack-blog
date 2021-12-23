import React from 'react';
import { BurgerButton } from './Burger.styles';

export interface BurgerProps {
  onClick: () => void;
}

export const Burger: React.FC<BurgerProps> = ({ onClick }) => {
  return (
    <div>
      <BurgerButton onClick={onClick}>
        <div />
        <div />
        <div />
      </BurgerButton>
    </div>
  );
};

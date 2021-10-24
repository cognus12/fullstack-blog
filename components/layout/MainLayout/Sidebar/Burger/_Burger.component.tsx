import React from 'react';
import { BurgerButton } from './_Burger.styles';

export interface BurgerProps {
  onClick: () => void;
}

export const Burger: React.FC<BurgerProps> = ({ onClick }) => {
  return (
    <div>
      <BurgerButton onClick={onClick} />
    </div>
  );
};

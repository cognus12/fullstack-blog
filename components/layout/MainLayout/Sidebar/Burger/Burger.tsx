import React from 'react';
import styled from 'styled-components';
import { device } from '../../../../../styles/global';

export interface BurgerProps {
  onClick: () => void;
}

const BurgerButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 1px solid black;
  position: fixed;
  bottom: 20px;
  right: 20px;

  @media screen and ${device.laptop} {
    display: none;
  }
`;

export const Burger: React.FC<BurgerProps> = ({ onClick }) => {
  return (
    <div>
      <BurgerButton onClick={onClick} />
    </div>
  );
};

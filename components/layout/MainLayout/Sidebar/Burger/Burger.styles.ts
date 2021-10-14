import styled from 'styled-components';
import { device } from '../../../../../styles/device';

export const BurgerButton = styled.button`
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

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
  transform: translateZ(0);

  div {
    height: 4px;
    background-color: ${({ theme }) => theme.colors.common.black100};

    &:nth-child(2) {
      margin: 4px 0;
    }
  }

  @media screen and ${device.laptop} {
    display: none;
  }
`;

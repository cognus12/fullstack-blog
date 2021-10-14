import styled from 'styled-components';
import { device } from '../../../../styles/device';

interface AsideProps {
  isOpen: boolean;
}

export const Aside = styled.aside<AsideProps>`
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.sidebar.background};
  padding: 20px;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 100%;
  transform: ${(props) => (props.isOpen ? 'translateX(100%)' : 'translateX(0)')};
  transition: transform 0.3s;

  @media screen and ${device.tablet} {
    width: 50%;
  }

  @media screen and ${device.laptop} {
    width: 300px;
    height: 600px;
    position: sticky;
    margin-top: 40px;
    top: 40px;
    right: auto;
    align-self: flex-start;
    flex-shrink: 0;
    padding: 10px;
    transform: none;
    transition: none;
  }
`;

import styled from 'styled-components';

export const LogoText = styled.a`
  color: ${({ theme }) => theme.colors.logo.color};
  font-size: 24px;
  text-transform: uppercase;
  cursor: pointer;
`;

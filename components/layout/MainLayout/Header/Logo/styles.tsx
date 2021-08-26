import styled from 'styled-components';

export const LogoText = styled.a`
  color: ${({ theme }) => theme.colors.logo};
  font-size: 24px;
  text-transform: uppercase;
  cursor: pointer;
`;

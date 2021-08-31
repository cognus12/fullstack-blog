import styled from 'styled-components';

export const Aside = styled.aside`
  width: 300px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.secondaryBg};
  height: 600px;
  position: sticky;
  margin-top: 40px;
  top: 40px;
  align-self: flex-start;
  flex-shrink: 0;
  padding: 10px;
`;

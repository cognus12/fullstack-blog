import styled from 'styled-components';
import { FlexContainer } from '../../shared';

export const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.colors.header.background};
`;

export const HeaderInner = styled(FlexContainer)`
  padding: 20px 0;
`;

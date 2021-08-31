import styled from 'styled-components';
import { FlexContainer } from '../shared';

export const PageWrapper = styled.div`
  min-height: 100vh;
`;

export const PageInner = styled(FlexContainer)`
  flex-wrap: nowrap;
  column-gap: 20px;
  position: relative;
`;

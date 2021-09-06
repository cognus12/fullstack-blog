import styled from 'styled-components';
import { FlexContainer } from '../shared';

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

export const PageInner = styled(FlexContainer)`
  flex-wrap: nowrap;
  column-gap: 20px;
  position: relative;
`;

export const MainContent = styled.main`
  width: 100%;
  max-width: 1000px;
`;

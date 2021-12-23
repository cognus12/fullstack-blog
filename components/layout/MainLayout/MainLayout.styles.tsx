import styled from 'styled-components';
import { device } from '../../../styles/device';
import { Container, FlexContainer } from '../../../styles/containers';

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

export const ContentWrapper = styled(Container)`
  min-height: 100%;
`;

export const PageInner = styled(FlexContainer)`
  flex-wrap: nowrap;

  position: relative;

  @media screen and ${device.laptop} {
    column-gap: 20px;
  }
`;

export const MainContent = styled.main`
  width: 100%;

  @media screen and ${device.laptop} {
    max-width: 1000px;
  }
`;

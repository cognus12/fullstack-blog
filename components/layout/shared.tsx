import styled, { CSSObject } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

export type FlexProps = Pick<CSSObject, 'justifyContent' | 'alignContent' | 'alignItems' | 'flexWrap' | 'flexDirection' | 'flexFlow'>

export interface FlexContainerProps {
  flexProps?: FlexProps
}

export const FlexContainer = styled.div<FlexContainerProps>(({ flexProps = {} }) => ({
  display: 'flex',
  ...flexProps
}));
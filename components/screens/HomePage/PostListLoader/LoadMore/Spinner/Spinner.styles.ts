import styled, { keyframes } from 'styled-components';
import { SpinnerProps } from './Spinner';

interface SpinnerInnerProps extends Pick<SpinnerProps, 'color'> {
  strokeColor: string;
}

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

export const SpinnerRoot = styled.div`
  display: inline-block;
  max-height: fit-content;
`;

export const SpinnerInner = styled.svg<SpinnerInnerProps>`
  display: block;
  animation: ${rotate} 2s linear infinite;
  width: 20px;
  height: 20px;

  & .path {
    stroke: ${({ strokeColor }) => strokeColor};
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`;

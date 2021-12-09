import React from 'react';
import { SpinnerInner, SpinnerRoot } from './_Spinner.styles';

export interface SpinnerProps {
  className?: string;
  color?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ className, color = 'black' }) => {
  return (
    <SpinnerRoot className={className}>
      <SpinnerInner viewBox="0 0 50 50" strokeColor={color}>
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
      </SpinnerInner>
    </SpinnerRoot>
  );
};

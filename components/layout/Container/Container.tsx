import React from 'react';

export interface ContainerProps {
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <div className={`w-full max-w-[1170px] m-auto px-[10px] tablet:px-[20px] ${className}`}>{children}</div>
);

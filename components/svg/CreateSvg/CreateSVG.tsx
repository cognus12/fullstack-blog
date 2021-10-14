import React from 'react';

export interface CreateSVGProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export interface SVGIconProps extends Pick<CreateSVGProps, 'fill' | 'stroke' | 'color' | 'className'> {}

export const CreateSVG: React.FC<CreateSVGProps> = ({ className, children, ...svgProps }) => (
  <svg className={className} {...svgProps}>
    {children}
  </svg>
);

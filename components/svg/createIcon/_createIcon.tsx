import React from 'react';

interface SVGBaseProps extends React.SVGProps<SVGSVGElement> {}

interface SVGComponentProps extends SVGBaseProps {
  displayName?: string;
}

interface SVGIconProps extends SVGBaseProps {
  className?: string;
}

type CreateIcon = (children: React.ReactNode, options: SVGComponentProps) => React.FC<SVGIconProps>;

const defaultSvgProps: React.SVGProps<SVGSVGElement> = {
  viewBox: '0 0 20 20',
  width: '20px',
  height: '20px',
};

export const createSvg: CreateIcon = (children, { displayName, ...svgProps }) => {
  const SVGIcon: React.FC<SVGIconProps> = ({ className }) => (
    <svg className={className} {...defaultSvgProps} {...svgProps}>
      {children}
    </svg>
  );

  SVGIcon.displayName = displayName ? displayName : 'SVGIcon';

  return SVGIcon;
};

import React from 'react';

export interface SpinnerProps {
  className?: string;
  color?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ className, color = 'black' }) => {
  const computedRootClassName = `inline-block w-fit ${className}`;

  return (
    <div className={computedRootClassName}>
      <svg viewBox="0 0 50 50" className="block animate-[rotate_2s_linear_infinite] w-[20px] h-[20px]">
        <circle
          stroke={color}
          className="animate-[dash_1.5s_ease-in-out_infinite]"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
};

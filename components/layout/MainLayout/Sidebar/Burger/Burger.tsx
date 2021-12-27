import React from 'react';

export interface BurgerProps {
  onClick: () => void;
}

export const Burger: React.FC<BurgerProps> = ({ onClick }) => {
  return (
    <div>
      <button
        className="w-[40px] h-[40px] rounded-full border border-emerald-600 fixed bottom-[20px] right-[20px] laptop:hidden"
        style={{ transform: 'translateZ(0)' }}
        onClick={onClick}
      >
        <div className="h-[4px] bg-emerald-600" />
        <div className="h-[4px] my-[4px] bg-emerald-600" />
        <div className="h-[4px] bg-emerald-600" />
      </button>
    </div>
  );
};

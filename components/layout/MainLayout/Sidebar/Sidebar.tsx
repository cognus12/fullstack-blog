import React from 'react';
import { SideBarTags } from './SideBarTags';
import { Burger } from './Burger';
import { useClickOutSide } from '../../../../hooks';

export interface SidebarProps {}

const SidebarView: React.FC<SidebarProps> = () => {
  const [isOpen, setOpen] = React.useState(false);

  const onClickBurger = () => setOpen(!isOpen);
  const onClickOutside = () => setOpen(false);

  const rootElementRef = useClickOutSide<HTMLDivElement>(onClickOutside);

  const asideTransform = isOpen ? 'translateX(100%)' : 'translateX(0)';

  return (
    <div ref={rootElementRef}>
      <aside
        className="rounded-[15px] bg-gray-800 p-[20px] fixed w-full h-full top-0 right-[100%] transition-transform delay-300 tablet:w-[50%] laptop:w-[300px] laptop:h-[600px] laptop:sticky laptop:mt-[40px] laptop:top-[40px] laptop:right-auto laptop:self-start laptop:shrink-0 laptop:p-[10px] laptop:transform-none laptop:transition-none"
        style={{ transform: asideTransform }}
      >
        <SideBarTags />
      </aside>
      <Burger onClick={onClickBurger} />
    </div>
  );
};

export const Sidebar = React.memo(SidebarView);

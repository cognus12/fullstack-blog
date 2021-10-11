import React from 'react';
import { Aside } from './styles';
import { SideBarTags } from './SideBarTags';
import { Burger } from './Burger';
import { useClickOutSide } from '../../../../core/hooks';

export interface SidebarProps {}

const SidebarView: React.FC<SidebarProps> = () => {
  const [isOpen, setOpen] = React.useState(false);

  const onClickBurger = () => setOpen(!isOpen);
  const onClickOutside = () => setOpen(false);

  const rootElementRef = useClickOutSide<HTMLDivElement>(onClickOutside);

  return (
    <div ref={rootElementRef}>
      <Aside isOpen={isOpen}>
        <SideBarTags />
      </Aside>
      <Burger onClick={onClickBurger} />
    </div>
  );
};

export const Sidebar = React.memo(SidebarView);

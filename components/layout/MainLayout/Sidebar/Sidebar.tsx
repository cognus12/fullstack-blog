import React from 'react';
import { Aside } from './styles';
import { SideBarTags } from './SideBarTags';

export interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <Aside>
      <SideBarTags />
    </Aside>
  );
};

import React from 'react';
import styled from 'styled-components';

export interface SidebarProps {}

export const AsideWrapper = styled.div`
  position: absolute;
  height: 100%;
  right: 0;
`;

export const Aside = styled.aside`
  width: 300px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.secondaryBg};
  height: 600px;
  position: sticky;
  margin-top: 40px;
  top: 40px;
  align-self: flex-start;
  flex-shrink: 0;
`;

export const Sidebar: React.FC<SidebarProps> = () => {
  return <Aside />;
};

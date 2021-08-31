import React from 'react';
import { PageInner, PageWrapper } from './styles';
import { Container } from '../shared';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export interface MainLayoutProps {}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <PageWrapper>
      <Header />
      <Container>
        <PageInner>
          <main>{children}</main>
          <Sidebar />
        </PageInner>
      </Container>
    </PageWrapper>
  );
};

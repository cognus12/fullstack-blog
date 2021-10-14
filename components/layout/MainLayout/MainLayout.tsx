import React from 'react';
import { MainContent, PageInner, PageWrapper } from './MainLayout.styles';

import { Header } from './Header';
import { Footer } from './Footer';
import { Container } from '../../../styles/containers';
import { Sidebar } from './Sidebar/Sidebar';

export interface MainLayoutProps {}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <PageWrapper>
      <Header />
      <Container>
        <PageInner>
          <MainContent>{children}</MainContent>
          <Sidebar />
        </PageInner>
      </Container>
      <Footer />
    </PageWrapper>
  );
};

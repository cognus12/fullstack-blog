import React from 'react';
import { MainContent, ContentWrapper, PageInner, PageWrapper } from './_MainLayout.styles';

import { Header } from './Header';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';

export interface MainLayoutProps {}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
        <PageInner>
          <MainContent>{children}</MainContent>
          <Sidebar />
        </PageInner>
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  );
};

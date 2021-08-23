import React from 'react';
import { PageWrapper } from './styles';
import { Container } from '../shared';
import { Header } from './Header';

export interface MainLayoutProps {}

export const MainLayout: React.FC<MainLayoutProps> = ({ children}) => {
  return (
    <PageWrapper>
      <Header />
      <Container>
        <main>
          {children}
        </main>
      </Container>
    </PageWrapper>
  );
};

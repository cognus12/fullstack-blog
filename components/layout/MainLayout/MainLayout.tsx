import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';
import { Container } from '../Container';

export interface MainLayoutProps {}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      <Container className="min-h-full">
        <div className="flex flex-nowrap relative laptop:gap-x-[20px]">
          <main className="w-full laptop:max-w-[1000px]">{children}</main>
          <Sidebar />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

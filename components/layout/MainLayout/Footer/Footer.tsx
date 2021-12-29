import React from 'react';
import { Container } from '../../Container';

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-gray-800 py-[40px]">
      <Container>
        <div className="flex justify-between">
          <div className="flex flex-col gap-y-[10px]">
            <span className="text-[18px]">Blog Author</span>
            <span className="text-[14px]">Fullstack Developer (TypeScript, React, Node.js, Go)</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

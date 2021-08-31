import React from 'react';
import { Container } from '../../shared';
import { BlogAuthorInfo, BlogAuthorName, BlogAuthorWrapper, FooterInner, FooterWrapper } from './styles';

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterInner>
          <BlogAuthorWrapper>
            <BlogAuthorName>Blog Author</BlogAuthorName>
            <BlogAuthorInfo>Fullstack Developer (TypeScript, React, Node.js, Go)</BlogAuthorInfo>
          </BlogAuthorWrapper>
        </FooterInner>
      </Container>
    </FooterWrapper>
  );
};

import React from 'react';
import { Container } from '../../../../styles/containers';
import { BlogAuthorInfo, BlogAuthorName, BlogAuthorWrapper, FooterInner, FooterWrapper } from './_Footer.styles';

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

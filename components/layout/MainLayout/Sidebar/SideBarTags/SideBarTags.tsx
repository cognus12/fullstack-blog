import React from 'react';
import { HashTags } from '../../../../shared/HashTags';

const tags = [
  { title: '#example', href: '/' },
  { title: '#js', href: '/' },
  { title: '#golang', href: '/' },
  { title: '#node', href: '/' },
  { title: '#life', href: '/' },
  { title: '#react', href: '/' },
  { title: '#ts', href: '/' },
  { title: '#patterns', href: '/' },
  { title: '#motivation', href: '/' },
  { title: '#mongodb', href: '/' },
  { title: '#sql', href: '/' },
  { title: '#python', href: '/' },
  { title: '#material', href: '/' },
  { title: '#angular', href: '/' },
  { title: '#vue', href: '/' },
  { title: '#svelt', href: '/' },
  { title: '#docker', href: '/' },
  { title: '#nginx', href: '/' },
  { title: '#frontend', href: '/' },
  { title: '#backend', href: '/' },
  { title: '#websockets', href: '/' },
  { title: '#graphql', href: '/' },
  { title: '#bootstrap', href: '/' },
  { title: '#nextjs', href: '/' },
  { title: '#nestjs', href: '/' },
  { title: '#express', href: '/' },
  { title: '#php', href: '/' },
  { title: '#laravel', href: '/' },
];

export interface SideBarTags {}

export const SideBarTags: React.FC<SideBarTags> = () => {
  return <HashTags tags={tags} />;
};

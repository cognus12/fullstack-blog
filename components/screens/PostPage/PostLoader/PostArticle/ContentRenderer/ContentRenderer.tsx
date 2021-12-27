import React from 'react';

import css from './ContentRenderer.module.css';

export interface ContentRendererProps {
  content: string;
}

export const ContentRenderer: React.FC<ContentRendererProps> = ({ content = '' }) => {
  const computedClassName = `text-[20px] ${css.content}`;

  return <div className={computedClassName} dangerouslySetInnerHTML={{ __html: content }} />;
};

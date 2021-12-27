import React from 'react';
import { convertDateToView } from './DateView.utils';

export interface DateViewProps {
  date: string;
}

export const DateView: React.FC<DateViewProps> = ({ date }) => (
  <span className="text-[14px] text-gray-500">{convertDateToView(date)}</span>
);

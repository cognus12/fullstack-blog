import React from 'react';
import { convertDateToView } from './DateView.utils';
import { DateWrapper } from './DateView.styles';

export interface DateViewProps {
  date: string;
}

export const DateView: React.FC<DateViewProps> = ({ date }) => <DateWrapper>{convertDateToView(date)}</DateWrapper>;

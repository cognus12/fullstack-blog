import React from 'react';
import { convertDateToView } from './_DateView.utils';
import { DateWrapper } from './_DateView.styles';

export interface DateViewProps {
  date: string;
}

export const DateView: React.FC<DateViewProps> = ({ date }) => <DateWrapper>{convertDateToView(date)}</DateWrapper>;

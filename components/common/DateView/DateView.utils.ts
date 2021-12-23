export const convertDateToView = (date: string): string => {
  return new Date(date).toLocaleString('ru-RU', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
};

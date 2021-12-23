import { HashTagDTO, HashTagUI } from '../../../common/contracts/HashTagDTO';

const formatHashTagToHref = (str: string): string => (str[0] === '#' ? str.slice(1) : str);
const formatHashTagToView = (str: string): string => (str[0] === '#' ? str : `#${str}`);

export const formatHashTags = (tags: string[] | HashTagDTO[]): HashTagUI[] => {
  return tags.map((item) => {
    if (typeof item === 'object') {
      const { tag, count } = item;
      return {
        tag: `${formatHashTagToView(tag)} ${count ? `(${count})` : ''}`,
        href: `/tags/${formatHashTagToHref(tag)}`,
      };
    }

    return {
      tag: formatHashTagToView(item),
      href: `/tags/${formatHashTagToHref(item)}`,
    };
  });
};

import { GeneralObject } from './types';

export const omit = <S extends GeneralObject, K extends string[]>(source: S, keys: K): S => {
  return Object.keys(source).reduce((acc, key) => {
    if (!keys.includes(key)) {
      Object.assign(acc, { [key]: source[key] });
    }
    return acc;
  }, {} as S);
};

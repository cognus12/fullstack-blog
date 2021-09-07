import { GeneralObject } from './types';

export const pick = <S extends GeneralObject, K extends string[]>(source: S, keys: K): S => {
  return keys.reduce((acc, key) => {
    Object.assign(acc, { [key]: source[key] });
    return acc;
  }, {} as S);
};

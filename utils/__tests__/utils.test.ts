import { pick } from '../pick';
import { omit } from '../omit';
import { takeLast } from '../takeLast';

describe('Utils', () => {
  describe('pick', () => {
    it('should return object with selected keys', () => {
      const testObj = {
        foo: 1,
        bar: 'z',
        baz: 'x',
      };

      const expectedObj = {
        foo: 1,
        bar: 'z',
      };

      expect(pick(testObj, ['foo', 'bar'])).toStrictEqual(expectedObj);
    });
  });

  describe('omit', () => {
    it('should return object without selected keys', () => {
      const testObj = {
        foo: 1,
        bar: 'z',
        baz: 'x',
      };

      const expectedObj = {
        baz: 'x',
      };

      expect(omit(testObj, ['foo', 'bar'])).toStrictEqual(expectedObj);
    });
  });

  describe('takeLast', () => {
    it('should return last element of array');

    const arr = [1, 2, 3];

    const expected = 3;

    expect(takeLast(arr)).toBe(expected);
  });
});

import { pick } from '../pick';
import { omit } from '../omit';

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
});

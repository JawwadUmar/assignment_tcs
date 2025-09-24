// flattenObject.test.ts
import { flattenObject } from './flattenObject';

describe('flattenObject', () => {
  it('should flatten a nested object', () => {
    const obj = {
      a: 1,
      b: {
        c: 'hello',
        d: {
          e: true,
        },
      },
      f: [{ g: 'world' }],
    };

    const result = flattenObject(obj);

    expect(result).toEqual({
      'a': 1,
      'b.c': 'hello',
      'b.d.e': true,
      'f.0.g': 'world',
    });
  });

  it('should handle empty object', () => {
    const obj = {};
    const result = flattenObject(obj);
    expect(result).toEqual({});
  });

  it('should handle primitive values only', () => {
    const obj = { a: 1, b: 'test', c: true };
    const result = flattenObject(obj);
    expect(result).toEqual({ a: 1, b: 'test', c: true });
  });

  it('should handle arrays at root level', () => {
    const obj = [{ x: 10 }, { y: 20 }];
    const result = flattenObject(obj);
    expect(result).toEqual({ '0.x': 10, '1.y': 20 });
  });

  it('should handle deeply nested objects', () => {
    const obj = { a: { b: { c: { d: { e: 42 } } } } };
    const result = flattenObject(obj);
    expect(result).toEqual({ 'a.b.c.d.e': 42 });
  });

  it('should handle null values correctly', () => {
    const obj = { a: null, b: { c: null } };
    const result = flattenObject(obj);
    expect(result).toEqual({ 'a': null, 'b.c': null });
  });
});

import { flattenObject, Flatten } from './flattenObject';

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

const flattened = flattenObject(obj);

type FlattenedObj = Flatten<typeof obj>;

console.log(flattened);
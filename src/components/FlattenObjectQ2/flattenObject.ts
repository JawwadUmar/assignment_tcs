export type Flatten<T, Prefix extends string = ''> = {
  [K in keyof T & (string | number)]: T[K] extends object
    ? T[K] extends Array<any>
      ? Flatten<T[K][number], `${Prefix}${K}.`> // this handle arrays with index
      : Flatten<T[K], `${Prefix}${K}.`> // nested objects
    : { [P in `${Prefix}${K}`]: T[K] };
}[keyof T & (string | number)] extends infer O
  ? { [K in keyof O]: O[K] }
  : never;

export function flattenObject<T extends Record<string, any>>(
  obj: T,
  parentKey = ''
): Flatten<T> {
  const result: Record<string, any> = {};

  const helper = (curr: any, prefix: string) => {
    if (typeof curr !== 'object' || curr === null) {
      result[prefix] = curr;
      return;
    }

    if (Array.isArray(curr)) {
      curr.forEach((item, index) =>
        helper(item, prefix ? `${prefix}.${index}` : `${index}`)
      );
    } else {
      for (const key in curr) {
        const newKey = prefix ? `${prefix}.${key}` : key;
        helper(curr[key], newKey);
      }
    }
  };

  helper(obj, parentKey);
  return result as Flatten<T>;
}



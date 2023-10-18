export type Getters<T extends string, K> = {
  [k in T]: K;
};

export type UppercaseFirstLetter<T extends string> =
  T extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : T;

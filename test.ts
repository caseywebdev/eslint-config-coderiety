import a from 'node:crypto';

type Bar = (a: number) => string;

const bar: Bar = a => a.toString();

bar(1);

const foo = async () => {
  const bar = 1;
  return bar;
};

const baz: {} = {};

await foo();

foo();

globalThis.console.log(a, baz);

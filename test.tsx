import a from 'node:crypto';

type Bar = (a: number) => string;

const bar: Bar = a => a.toString();

bar(1);

const foo = async () => {
  const bar = 1;
  return bar;
};

await foo();

const baz: {} = 'a';

<div />;

foo();

globalThis.console.log(a, baz);

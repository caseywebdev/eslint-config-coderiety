import a from 'node:crypto';

type Bar = (a: any) => any;

const bar: Bar = a => a;

bar(1);

const foo = async () => {
  const bar = 1;
  return bar;
};

await foo();

<div />;

foo();

globalThis.Promise;

globalThis.console.log(a);

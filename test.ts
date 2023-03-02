import a from 'node:crypto';

const foo = async (): Promise<number> => {
  const bar = 1;
  return bar;
};

await foo();

foo();

globalThis.Promise;

globalThis.console.log(a);

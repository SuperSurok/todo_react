import { partial } from "./util";

const add = (a, b) => a + b;
const addThree = (a, b, c) => a + b + c;

test("partial applies the first argument ahead of time", () => {
  const inc = partial(add, 1);
  const result = inc(2);
  expect(result).toBe(3);
});

test("partial applies the multiple argument ahead of time", () => {
  const inc = partial(addThree, 1, 3);
  const result = inc(2);
  expect(result).toBe(6);
});

const { sum, sum2, sum3 } = require("./functions");

test("sum with 3 & 2 should return 5", () => {
  expect(sum(3, 2)).toBe(5);
});

test("sum2 with 3 & 2 should return 5", () => {
  expect(sum2(3, 2)).toBe(5);
});

test("sum3 with 3 & 2 should return 5", () => {
  expect(sum3(3, 2)).toBe(5);
});

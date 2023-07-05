const { describe, it } = require("node:test");
const { deepStrictEqual } = require("assert");
const { parseCaloriesByElves } = require("../src/calories-by-elves-parser");

describe('parseCaloriesByElves', () => {
  it('Should parse and give calorie of a elf', () => {
    const rawText = `1
    2
    `;
    const actual = parseCaloriesByElves(rawText);
    const expected = [[1, 2]];

    deepStrictEqual(actual, expected);
  });
  it('Should parse and give calorie of multiple elves', () => {
    const rawText = `1
    2

    3
    2
    `;
    const actual = parseCaloriesByElves(rawText);
    const expected = [[1, 2], [3, 2]];

    deepStrictEqual(actual, expected);
  })
})
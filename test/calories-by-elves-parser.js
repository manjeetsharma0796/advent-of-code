const { describe, it } = require("node:test");
const { parseCaloriesByElves } = require("../src/calories-by-elves-parser");
const { deepStrictEqual } = require("assert");

describe('parseCaloriesByElves', () => {
  it('Should parse and give calorie of a elf', () => {
    const rawText = `1
    2
    `;
    const actual = parseCaloriesByElves(rawText);
    const expected = [[1, 2]];

    deepStrictEqual(actual, expected);
  })
})
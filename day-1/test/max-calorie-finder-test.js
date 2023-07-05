const { describe, it } = require("node:test");
const { strictEqual, deepStrictEqual } = require("assert");
const { sumOfNumbers, descendingSorter, getTotalCaloriesByElves, getMaxCaloriesByElves, getSumMaxThreeCaloriesByElves } = require("../src/max-calorie-finder");

describe('sumOfNumbers', () => {
  it('Should give sum as 0 when no number is provided', () => {
    const actual = sumOfNumbers([]);
    const expected = 0;
    strictEqual(actual, expected);
  })

  it('Should give sum as 5 when numbers provided sum is 5', () => {
    const actual = sumOfNumbers([3, 1, 1]);
    const expected = 5;
    strictEqual(actual, expected);
  })
})

describe('descendingSorter', () => {
  it('Should sort two numbers in descending order', () => {
    const actual = descendingSorter([1, 2]);
    const expected = [2, 1];
    deepStrictEqual(actual, expected);
  })

  it('Should sort multiple numbers in descending order', () => {
    const actual = descendingSorter([1, 2, 3, 4, 5, 2]);
    const expected = [5, 4, 3, 2, 2, 1];
    deepStrictEqual(actual, expected);
  })
})

describe('getTotalCaloriesByElves', () => {
  it('Should give total of calories carried by an elf', () => {
    const actual = getTotalCaloriesByElves([[1]]);
    const expected = [1];

    deepStrictEqual(actual, expected);
  });

  it('Should give total of calories carried by multiple elves with multiple calories', () => {
    const actual = getTotalCaloriesByElves([[4, 1], [9, 4]]);
    const expected = [5, 13];

    deepStrictEqual(actual, expected);
  });
})

describe('getMax', () => {
  it('Should give max calorie carried by an elf as 1', () => {
    const actual = getMaxCaloriesByElves([[1]]);
    const expected = 1;

    strictEqual(actual, expected);
  });

  it('Should give max calorie carried by elves as 5', () => {
    const actual = getMaxCaloriesByElves([[1, 4], [1]]);
    const expected = 5;

    strictEqual(actual, expected);
  });

  it('Should give max calories carried by elves as 10', () => {
    const actual = getMaxCaloriesByElves([[1, 4], [1, 9]]);
    const expected = 10;

    strictEqual(actual, expected);
  });
});

describe('getSumMaxThreeCaloriesByElves', () => {
  it('Should give top three max calories', () => {
    const actual = getSumMaxThreeCaloriesByElves([[1],[2],[3],[0]]);
    const expected = 6;

    deepStrictEqual(actual, expected);
  })

  it('Should give top three max calories even if two have same calories', () => {
    const actual = getSumMaxThreeCaloriesByElves([[1],[2],[2],[0]]);
    const expected = 5;

    deepStrictEqual(actual, expected);
  })
})
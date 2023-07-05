const fs = require('fs');
const {  getMaxCaloriesByElves, getMaxThreeCaloriesByElves } = require('./src/max-calorie-finder');
const { read } = require('./src/reader');
const { parseCaloriesByElves } = require('./src/calories-by-elves-parser');

const main = () => {
  const path = process.argv[2];

  read(path, parseCaloriesByElves, getMaxCaloriesByElves);
  read(path, parseCaloriesByElves, getMaxThreeCaloriesByElves);
}

main();

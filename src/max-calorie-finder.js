const sum = (num1, num2) => {
  return num1 + num2;
}

const sumOfNumbers = (numbers) => {  //numbers = [4,5,6,7,8]
  return numbers.reduce(sum, 0);
}

const compareNumbers = (num1, num2) => {
  return num2 - num1;
}

const descendingSorter = (list) => {
  return list.sort(compareNumbers);
}

const getTotalCaloriesByElves = (caloriesCarriedByElves) => {
  return caloriesCarriedByElves.reduce((totalCaloriesByElves, caloriesCarriedByElf) => {
    totalCaloriesByElves.push(sumOfNumbers(caloriesCarriedByElf));
    return totalCaloriesByElves;
  }, []);
}

const display = (message, result) => {
  console.log(`${message} ${result}`);
}

//Part 1
const getMaxCaloriesByElves = (caloriesCarriedByElves) => {
  const totalCaloriesByElvesInDescending = getTotalCaloriesByElves(caloriesCarriedByElves);
  const max = descendingSorter(totalCaloriesByElvesInDescending)[0];
  display('PART 1 - The maximum calorie carried by an elf is', max);
  return max;
}

//Part 2
const getSumMaxThreeCaloriesByElves = (caloriesCarriedByElves) => {
  const totalCaloriesByElvesInDescending = getTotalCaloriesByElves(caloriesCarriedByElves);
  const [max1, max2, max3] = descendingSorter(totalCaloriesByElvesInDescending).slice(0, 3);
  display('PART 2 - The top three max calories carried by elves are', [max1, max2, max3]);
  return sumOfNumbers([max1, max2, max3]);
}

module.exports = {
  sumOfNumbers,
  descendingSorter,
  getTotalCaloriesByElves,
  getMaxCaloriesByElves,
  getSumMaxThreeCaloriesByElves,
}
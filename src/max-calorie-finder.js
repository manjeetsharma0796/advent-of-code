const sum = (num1, num2) => {
  return num1 + num2;
}

const sumOfNumbers = (numbers) => {  //numbers = [4,5,6,7,8]
  return numbers.reduce(sum, 0);
}

const compareNumbers = (a, b) => {
  return b - a;
}

const getMaxCalorieElf = (carriedCaloriesByElves) => {
  const totalCalories = [];

  carriedCaloriesByElves.forEach((calorieCarriedByElv) => {
    const currentSumOfCalories = sumOfNumbers(calorieCarriedByElv);
    totalCalories.push(currentSumOfCalories);
  });

  const [max1, max2, max3] = totalCalories.sort(compareNumbers).slice(0, 3);
  return sumOfNumbers([max1, max2, max3]);
}

exports.getMaxCalorieElf = getMaxCalorieElf;
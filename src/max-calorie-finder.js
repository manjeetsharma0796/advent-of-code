const sum = (num1, num2) => {
  return num1 + num2;
}

const sumOfNumbers = (numbers) => {  //numbers = [4,5,6,7,8]
  return numbers.reduce(sum, 0);
}

const getMaxCalorieElf = (elves) => {
  let max = sumOfNumbers(elves[0]);

  elves.forEach((elf) => {
    const currentSumOfCalorie = sumOfNumbers(elf);
    max = Math.max(currentSumOfCalorie, max);
  });

  return max;
}

exports.getMaxCalorieElf = getMaxCalorieElf;
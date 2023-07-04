const fs = require('fs');
const { getMaxCalorieElf } = require('./src/max-calorie-finder');

const main = () => {
  const raw = fs.readFileSync('resource/reindeer-with-calories.txt','utf-8').trim();
  const raw1 = raw.split('\n\n');

  const caloriesInString = raw1.map((calorie) => {
  return (calorie.split('\n'));
  });

  const caloriesCarriedByElves = caloriesInString.map((calories) => {
    return calories.map((calorie) => {
     return parseInt(calorie);
    })
  })

  console.log(getMaxCalorieElf(caloriesCarriedByElves));

}

main();

// a.map((num) => {
//   return num.map((num1) => {
//    return parseInt(num1)
//   })
// })
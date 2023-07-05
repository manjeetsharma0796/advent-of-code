const parseCaloriesByElves = (raw) => {
  return raw.trim().split('\n\n').map((caloriesByElf) => {
    return caloriesByElf.split('\n').map((numInText) => +numInText)
  })
}

exports.parseCaloriesByElves = parseCaloriesByElves;
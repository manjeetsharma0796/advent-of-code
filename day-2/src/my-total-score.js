const moveScore = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3
}

const getOutcomeScore = (elfScore, myScore) => {

  if (elfScore === myScore) {
    return 3;
  }

  if (elfScore - myScore === -1 || elfScore - myScore === 2) {
    return 6;
  }

  return 0;
}

const calculateMyScore = (guidedMoves) => {
  let myTotalScore = 0;

  guidedMoves.forEach((move) => {
    const [elfMove, myMove] = move;
    const elfScore = moveScore[elfMove];
    const myScore = moveScore[myMove];

    const currentMoveScore = getOutcomeScore(elfScore, myScore);
    myTotalScore += currentMoveScore + myScore;
  })

  return myTotalScore;
}

exports.calculateMyScore = calculateMyScore;

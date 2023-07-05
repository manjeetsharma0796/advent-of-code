const fs = require('fs');
const { calculateMyScore } = require('./src/my-total-score');


const main = () => {
  const raw = fs.readFileSync('./resource/guided-moves.txt', 'utf-8').trim();
  const rawGuidedMoves = raw.trim().split('\n');

  const guidedMoves = rawGuidedMoves.map((move) => {
    const [elvMove, playerMove] = move.split(' ');
    return [elvMove, playerMove];
  })

  console.log(calculateMyScore(guidedMoves));
}

main();
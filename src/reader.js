const fs = require('fs');

const read = (path, onDataParser, onData) => {
  fs.readFile(path, 'utf-8', (err, rawData) => {
    if (err) {
      console.log(err);
    };

    const structuredCaloriesByElves = onDataParser(rawData);
    onData(structuredCaloriesByElves);
  });
}

exports.read = read;
const fs = require('fs');

const all_elves = [];
let current = 0;

const lines = fs.readFileSync('elf.txt', 'utf-8').split('\n');
lines.forEach((line) => {
  if (line.trim() === '') {
    all_elves.push(current);
    current = 0;
    return;
  }

  current += parseInt(line, 10);
});

const sortedElves = all_elves.sort((a, b) => a - b);
const lastThreeSums = sortedElves.slice(-3);
const sumOfLastThreeSums = lastThreeSums.reduce((acc, val) => acc + val, 0);

console.log(sumOfLastThreeSums);

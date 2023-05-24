const fs = require('fs');

let largest = 0;    // Initializes a variable that will keep track of the largest sum encountered
let current = 0;    // Initializes a variable that will calculate the sum for the current group of numbers

const lines = fs.readFileSync('elf.txt', 'utf-8').split('\n');
lines.forEach((line) => {
  if (line.trim() === '') {
    if (current > largest) {
      largest = current;
    }
    current = 0;
    return;
  }

  current += parseInt(line, 10);
});

console.log(largest);

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
  input.push(line.split(' ').map(Number));
  if (input.length === 2) rl.close();
});

rl.on('close', () => {
  const order = Number(input[0][1]);
  const numbers = input[1];
  const oneCounts = numbers.map((e) => e.toString(2).split('1').length - 1);
  const numCounts = numbers.map((num, idx) => [num, oneCounts[idx]]);
  numCounts.sort((a, b) => b[1] - a[1] || b[0] - a[0]);
  console.log(numCounts[order - 1][0]);
  process.exit();
});

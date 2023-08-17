// 운동 중독 플레이어
const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input;
rl.on('line', (line) => {
	input = line;
	rl.close();
});

rl.on('close', () => {
	input = input.split(' ')
	console.log(Math.floor(input[0] * (1 + input[1]/30)));
})
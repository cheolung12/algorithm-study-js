// 합 계산기
const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
	input.push(line.split(' '));
	if(input.length == Number(input[0]) + 1)
		rl.close();
})

rl.on('close', () => {
	ans = 0;
	for(let i=1; i<input.length; i++){
		if(input[i][1] === '+')	ans += (Number(input[i][0]) + Number(input[i][2]));
		if(input[i][1] === '-')	ans += (Number(input[i][0]) - Number(input[i][2]));
		if(input[i][1] === '*')	ans += (Number(input[i][0]) * Number(input[i][2]));
		if(input[i][1] === '/')	ans += Math.trunc((Number(input[i][0]) / Number(input[i][2])));			 
	}
	console.log(ans);
	process.exit();
})
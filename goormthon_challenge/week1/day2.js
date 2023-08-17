// 프로젝트 매니징
const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
	input.push(line.trim());
	if (input.length == Number(input[0])+2){
				rl.close();
		}
});

rl.on('close', () => {
	arr = input[1].split(' ').map(e => Number(e));
	for(let i=0; i<input[0]; i++){
		arr[1] += Number(input[2+i]);
	}
	if(arr[1] >= 60){
		arr[0] += Math.floor(arr[1]/60);
		arr[1] %= 60;
	}
	if(arr[0] > 23){
		arr[0] %= 24;
	}
	console.log(arr.join(' '));
	rl.close();
})
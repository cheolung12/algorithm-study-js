const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
	input.push(line.trim());
	if(input.length === 2)
		rl.close();
});

rl.on('close', () => {
	b = input[1].split(' ').map(e => Number(e));
	let flag = 0;
	for(let i=1; i<b.length; i++){
		if(flag === 0 && b[i-1] > b[i]){
			flag = 1;
			continue;
		} 
		if(flag === 1 && b[i-1] < b[i]){ 
				console.log(0);
				process.exit();
		} 
	}
	console.log(b.reduce((acc, cur) => acc + cur, 0));
	process.exit();
})
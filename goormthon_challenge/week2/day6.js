const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
	input.push(line);
	if(input.length === 2)
		rl.close();
});

rl.on('close', () => {
	let allCase = [];
	const partialString = (str) => {
		const result = [];
		for(let i=1; i<str.length; i++){
			for(let j=i+1; j<str.length; j++){
				const part1 = str.slice(0, i);
				const part2 = str.slice(i, j);
				const part3 = str.slice(j);
				
				result.push([part1, part2, part3]);
				allCase.push(part1, part2, part3);
			}
		}
		return result;
	}
	
	let answer = [];
	let result = partialString(input[1]);	
	allCase = [...new Set(allCase)].sort();
	
	for(let i=0; i<result.length; i++){
		let temp = 0;
		for(let j=0; j<3; j++){
			temp += (allCase.indexOf(result[i][j]) + 1);
		}
		answer.push(temp);
	}
	console.log(Math.max(...answer));
	process.exit()
})
const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
	input.push(line.split(' '));
	if(input.length === Number(input[0][0])+1)
		rl.close();
});

rl.on('close', () => {
	const N = Number(input[0][0]);
	let field = [];
	for(let i=0; i<N; i++){
		field.push(input[i+1]);
	}
	
	const directions = [ [-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
	for(let i=0; i<N; i++){
		for(let j=0; j<N; j++){
			if(field[i][j] === '1'){
				continue;
			}
			let temp = 0;
			for (let direction of directions){
				let c  = i + direction[0];
				let r  = j + direction[1];
				if(c >= 0 && r >= 0 && c < N && r < N){
					if(field[c][r] === '1')
						temp += 1;
				}
			field[i][j] = temp;
			}
		}
	}
	
	// 개수세기
	const K = Number(input[0][1]);
	let answer = 0;
	for(let row of field){
		answer += row.filter(e => e === K).length;
	}
	console.log(answer);
	process.exit();
})
const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
	input.push(line.split(' ').map(Number));
    if(input.length === input[0][0] + 1)
	    rl.close();
});

rl.on('close', () => {
    const N = input[0][0];
    const K = input[0][1];
    const town = input.slice(1, N+1);
    const visited = Array.from(Array(N), () => {new Array(N).fill(false)});
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];

    for(let i=0; i<N; i++){
        for(let j=0; j<N; j++){
          

        }
    }
    
})
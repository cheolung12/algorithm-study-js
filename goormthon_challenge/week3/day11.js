const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
	input.push(line.split(' ').map(Number));
    if(input.length === 2)
	    rl.close();
});

rl.on('close', () => {
	const N = input[0][0];
    const [A, B] = input[1];
    const dp = Array(N+1).fill(Infinity);
    dp[0] = 0;
    
    for(let i=1; i<=N; i++){
        if(i-A >= 0){
            dp[i] = Math.min(dp[i], dp[i-A] + 1);
        }
        if(i-B >= 0){
            dp[i] = Math.min(dp[i], dp[i-B] + 1)
        }
    }
    console.log(dp[N] === Infinity ? -1 : dp[N]);
    process.exit();
})
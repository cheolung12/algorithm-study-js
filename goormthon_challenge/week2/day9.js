const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
	input.push(line.split(' '));
    if(input.length === Number(input[0][0]) + Number(input[0][1]) + 1)
	    rl.close();
});

rl.on('close', () => {
    const N = Number(input[0][0]);
    const initialField = input.slice(1, N+1);
    const field = Array.from(Array(N), () => Array(N).fill(0));
    const coor = input.slice(N+1);
    // 처음 0은 현재 위치
    const dy = [0,-1,1,0,0];
    const dx = [0,0,0,-1,1];

    for(let c of coor){
        let x = Number(c[0])-1;
        let y = Number(c[1])-1;
        // 상하좌우 탐색
        for (let i=0; i<5; i++){
            let nx = x + dx[i];
            let ny = y + dy[i];
            if(nx >= 0 && ny >= 0 && nx < N && ny < N){
                if(initialField[nx][ny] === '0'){
                    field[nx][ny] += 1;
                }else if(initialField[nx][ny] === '@'){
                    field[nx][ny] += 2;
                }
            }
        }
    }
    // 최댓값 뽑기
    console.log(Math.max(...field.map(row => Math.max(...row))));
    process.exit();
})


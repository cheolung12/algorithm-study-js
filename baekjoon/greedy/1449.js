const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
  input.push(line.split(' ').map(Number));
  if (input.length === 2) rl.close();
});
rl.on('close', () => {
    const [N, L] = input[0];
    const locations = input[1].sort((a, b) => a - b);
  
    let tapes = 1; // 최소한 한 개의 테이프는 필요함
    let start = locations[0]; // 첫 번째 위치부터 시작
    let end = start + L - 1; // 처음 테이프의 끝 위치
    
    for (let i = 1; i < N; i++) {
      // 현재 테이프로 막은 구간을 벗어나는 경우
      if (locations[i] > end) {
        // 새로운 테이프 사용
        tapes++;
        start = locations[i]; // 새로운 테이프 시작 위치
        end = start + L - 1; // 새로운 테이프 끝 위치
      }
    }
  
    console.log(tapes);
  });

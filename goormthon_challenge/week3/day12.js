const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
  input.push(line.split(' ').map(Number));
  if (input.length === input[0][0] + 1) rl.close();
});

rl.on('close', () => {
  const N = input[0][0];
  const town = input.slice(1, N + 1);
  const visited = Array.from(Array(N), () => new Array(N).fill(false));
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (town[i][j] === 1 && !visited[i][j]) {
        count++;
        // BFS
        q = [];
        q.push([i, j]);
        while (q.length > 0) {
          let [currentR, currentC] = q.pop();
          visited[currentR][currentC] = true;

          for (let k = 0; k < 4; k++) {
            let nextR = currentR + dx[k];
            let nextC = currentC + dy[k];

            if (nextR >= 0 && nextR < N && nextC >= 0 && nextC < N) {
              if (town[nextR][nextC] === 1 && !visited[nextR][nextC]) {
                q.push([nextR, nextC]);
              }
            }
          }
        }
      }
    }
  }
  console.log(count);
  process.exit();
});

function solution(maps) {
    // 1. 방향벡터 설정
	const dx = [-1, 0, 1, 0];
	const dy = [0, -1, 0, 1];

	// 2. 행렬 크기 정의 및 방문 행렬 생성
	const rows = maps.length;
	const cols = maps[0].length;
	const visited = maps.map((r) => r.map((c) => 1));

	// 3. 시작점 설정
	const queue = [[0 ,0]];

	// 4. bfs
	while(queue.length){
		const [x, y] = queue.shift();
		// 4-1. 현 위치에서 탐색
		for(let i=0; i<4; i++){
			const nx = dx[i] + x;
			const ny = dy[i] + y;

			// 4-2. 범위 내에 있는지 확인
			if(nx < rows && ny < cols && nx >= 0 && ny >= 0){
				// 4-3. 조건 확인 (막혀있거나, 방문했거나 등)
				if(maps[nx][ny] !== 0 && visited[nx][ny] === 1){
					// 4-4. 카운트 증가하고 큐에 넣기
					visited[nx][ny] = visited[x][y] + 1;
					queue.push([nx, ny])
				}
			}
		}
	}
	// console.log(visited);
	return visited[rows-1][cols-1] !== 1 ? visited[rows-1][cols-1] : -1;
}


console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]));
console.log(solution([[1,0,0,0,0], [1,1,1,1,1], [0,0,0,0,1]]));
console.log(solution([[1,0,1,1,1],[1,0,1,0],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]));
function solution(rows, columns, queries) {
    let attr = 1;
    const arr = Array.from({length: rows}, () => Array.from({length: columns}, () => attr++));
    const mins = [];

    queries.forEach(query => {
        // 인덱스값으로 
        const [x1, y1, x2, y2] = query.map(el => el-1);
        let min = arr[x1][y2], tmp = arr[x1][y2];

        for(let i=y2; i>y1; i--){
            arr[x1][i] = arr[x1][i-1];
            min = Math.min(min, arr[x1][i]);
        }
        
        for(let i=x1; i<x2; i++){
            arr[i][y1] = arr[i+1][y1];
            min = Math.min(min, arr[i][y1]);
        }
        
        for(let i=y1; i<y2; i++){
            arr[x2][i] = arr[x2][i+1];
            min = Math.min(min, arr[x2][i]);
        }
        
        for(let i=x2; i>x1; i--){
            arr[i][y2] = arr[i-1][y2];
            min = Math.min(min, arr[i][y2]);
        }

        arr[x1+1][y2] = tmp;
        console.log(arr);
        mins.push(min);
    });

    return mins;
}


console.log(solution(6,6,[[2,2,5,4],[3,3,6,6],[5,1,6,3]]));
console.log(solution(3, 3, [[1, 1, 2, 2], [1, 2, 2, 3], [2, 1, 3, 2], [2, 2, 3, 3]]));
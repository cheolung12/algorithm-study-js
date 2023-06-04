function solution(m, n, board) {
    // 문자열을 2차원배열로 변환
    board = board.map(row => row.split(''));
    let answer = 0;
    let flag = true;
    
    while(flag){
        flag = false;
        let check = Array.from(Array(m), () => new Array(n).fill(false));

        // 2*2 같은거 찾기
        for (let r=0; r<m-1; r++){
            for (let c=0; c<n-1; c++){
                if (board[r][c] && board[r][c] === board[r][c+1] && board[r][c] === board[r+1][c] && board[r][c] === board[r+1][c+1]) {
                    check[r][c] = check[r][c+1] = check[r+1][c] = check[r+1][c+1] = true;
                }
            }
        }
        //console.log(check);

        // 블록 부시기
        for (let r=0; r<m; r++){
            for (let c=0; c<n; c++){
                if (check[r][c]) {
                    flag = true;
                    answer++;
                    board[r][c] = 0;
                }
            }
        }
        //console.log(board);

        // 빈 공간에 블록 내려주기
        
        for (let c=0; c<n; c++){
            // 0을 제외한 열의 요소들을 담은 배열 tmp
            let tmp = [];
            for (let r=0; r<m; r++){
                if (board[r][c]) 
                    tmp.push(board[r][c]);
            }
            //console.log(`tmp : ${tmp}`);
            
            // 해당 열을 모두 0으로 변경
            for (let r=0; r<m; r++){
                board[r][c] = 0;
            }
            //console.log(board);
            
            // tmp에 있던 원소들로 아래부터 채워넣기
            let rowIdx = m-1;
            while(tmp.length){
                board[rowIdx][c] = tmp.pop();
                rowIdx--;
            }
        }
    }
    return answer;
}

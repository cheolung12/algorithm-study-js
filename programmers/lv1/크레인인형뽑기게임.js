function solution(board, moves) {
    // 전치행렬 만들기
    board = board[0].map((_, i) => board.map(row => row[i]));
    
    const stack = [];   // 바구니
    let answer = 0;     
    
    for (let m of moves){
        for (let i=0; i < board[0].length; i++){
            // 인형이 있으면 뽑는다
            if (board[m-1][i] !== 0){
                // 같은거가 바구니 맨 위에 있을 경우 추가 안하고 pop
                if(stack[stack.length-1] === board[m-1][i]){
                    stack.pop();
                    answer += 2;
                }
                // 같은거가 바구니 맨 위에 없을 경우 그냥 추가만
                else
                    stack.push(board[m-1][i]);
                // 인형 뺐으니까 뺀 곳 값 0으로
                board[m-1][i] = 0;
                // 하나씩 빼는거니까 한 번 빼면 break
                break;
            }  
        }     
    }
     return answer;
}
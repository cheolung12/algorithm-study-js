function solution(n, m, section) {
    let answer = 0;
    let painted = 0;
    
    for(let s of section){
        if(painted < s){
            painted = s + (m-1);
            answer++;
        }
    }
    return answer;
}

// console.log(solution(10, 2, [1,3,7]));
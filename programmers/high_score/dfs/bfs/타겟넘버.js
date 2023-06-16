let answer = 0;

function solution(numbers, target) {
    dfs(0, 0, numbers, target);
    return answer;
}

const dfs = (idx, value, numbers, target) => {
    if (idx === numbers.length){
        if (value === target)
            answer += 1;
        return 
    }  
    dfs(idx+1, value + numbers[idx], numbers, target);
    dfs(idx+1, value - numbers[idx], numbers, target);
}

console.log(solution([4, 1, 2, 1], 4));
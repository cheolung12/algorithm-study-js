// 주어진 배열의 모든 원소에 대해 더하거나 빼는 모든 경우의 수를 찾는다.

let answer = 0; // 전역변수 선언

function solution(numbers, target) {
    dfs(0, 0, numbers, target);
    return answer;
}

const dfs = (idx, value, numbers, target) => {
    // 종료 조건
    if (idx === numbers.length){
        if (value === target)
            answer += 1;
        return 
    }  
    // 연산은 재귀에서
    dfs(idx+1, value + numbers[idx], numbers, target);
    dfs(idx+1, value - numbers[idx], numbers, target);
}

console.log(solution([4, 1, 2, 1], 4));
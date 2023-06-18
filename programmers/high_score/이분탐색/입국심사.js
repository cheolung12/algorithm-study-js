function solution(n, times) {
    // 최소시간 1
    let left = 1;
    // 최대시간 
    let right = Math.max(...times) * n;
    let answer = right;

    while (left <= right) {
        console.log(`left: ${left}`)
        console.log(`right: ${right}`)
        let mid = Math.floor((left + right) / 2);
        console.log(`mid: ${mid}`)

        // 최소시간을 mid로 잡고 몇명 이용가능한지(count) 계산
        let count = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);
        console.log(`count: ${count}`)
        console.log('--------------------------');

        // mid 값 조정하면서 반으로 줄이기
        if (count >= n) {
            answer = Math.min(answer, mid);
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return answer;
}

console.log(solution(6, [7, 10]));

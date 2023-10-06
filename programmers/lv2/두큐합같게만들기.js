function solution(queue1, queue2) {
    let count = 0;
    let idx1 = 0, idx2 = 0;
    let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
    let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);
    let maxMove = queue1.length * 4;
    
    while(count < maxMove){
        if(sum1 === sum2)
            return count;
        if(sum1 > sum2){
            // shift는 시간초과난다 가능하면 배열은 인덱스로 접근하자
            let temp = queue1[idx1++];
            sum1 -= temp;
            sum2 += temp;
            queue2.push(temp);
        }else {
            let temp = queue2[idx2++];
            sum2 -= temp;
            sum1 += temp;
            queue1.push(temp);
        }
        count++;
    }
    return -1;
}
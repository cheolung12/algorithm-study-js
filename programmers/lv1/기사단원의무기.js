function solution(number, limit, power) {
    const arr = [];
    // 약수 개수 구하기
    for (let i=1; i<number+1; i++){
        let count = 0;
        for (let j=1; j <= Math.sqrt(i); j++){
            if(i % j === 0){
                if(i/j === j) {
                    count += 1;
                } else {
                    count += 2;
                }
            }
        }     
        arr.push(count);
    }  
    
    return arr.map((e) => e > limit ? power : e).reduce((acc, cur) => acc + cur, 0);
    
}

function solution(d, budget) {
    let ans = 0;
    let acc = 0;
    d.sort((a,b) => a-b).forEach((money) => {
        acc += money;
        if(acc > budget){
            acc -= money
            return ans;
        }
        ans++;
    });
    return ans;
}
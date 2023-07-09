function solution(lottos, win_nums) {
    let min = 0;
    let max = 0;
    for(let l of lottos){
        if (l === 0){
            max++;
        }
        else if(win_nums.includes(l)){
            max++;
            min++;
        }
    }
    
    if (min === 0)
        min = 1;
    if (max === 0)
        max = 1;
    
    return [7-max, 7-min];
}
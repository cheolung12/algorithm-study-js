function solution(priorities, location) {
    let max = Math.max(...priorities);
    let idxArr = Array(priorities.length).fill(0).map((_,i) => i);
    const order = [];
    
    while(max > 0){
        if(!priorities.includes(max)){
            max--;
            continue;
        }
        if(priorities[0] === max){
            priorities.shift();
            order.push(idxArr.shift());
        }
        else{
            priorities.push(priorities.shift());
            idxArr.push(idxArr.shift());
        }
    }
    return order.indexOf(location) + 1;
   
}
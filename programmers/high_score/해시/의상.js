function solution(clothes) {
    const map = new Map();
    
    for(let [_, kind] of clothes){
        map.set(kind, (map.get(kind) || 0) + 1)
    }
    
    let answer = 1;
    for(let[_,v] of map){
        answer *= (v+1);
    }
    
    return answer-1;
}

/*
head: 2, eye: 1, body:2 가 있다고 가정하면
경우의 수는
head: 1착용, 2착용, 착용x
eye: 1착용, 착용x
body: 1착용, 2착용, 착용x
따라서 ( 3 * 2 * 3 ) - 1 = 17개이다. 
1을 빼준 이유는 모두 착용하지 않았을 경우 
*/
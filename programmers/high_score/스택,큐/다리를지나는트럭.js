function solution(length, weight, trucks) {
    let time = 0;
    let totalWeight = 0;
    const bridge = Array(length).fill(0);
    
    while (true) {
        // 원소들을 다 옮겨줄 필요 없이 bridge의 처음과 끝부분만 조정해주자
        time++;
        totalWeight -= bridge.shift();
        
        if (trucks && totalWeight + trucks[0] <= weight){
            const truck = trucks.shift();
            bridge.push(truck);
            totalWeight += truck;
        } else {
            bridge.push(0);
        }
        
        if (totalWeight === 0 && trucks.length === 0) {
            return time;
        }
    }
}

function solution(brown, yellow) {
    const y = (brown - 4) / 2;  // 노란색 둘레의 길이 절반
    for (let x=1; x<y; x++){
        if(x * (y-x) === yellow)    // 넓이 확인
            return [(y-x)+2, x+2];
    }
}
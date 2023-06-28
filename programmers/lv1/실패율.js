function solution(N, stages) {
    // 실패율을 기록할 객체
    const obj = {};
    let total = stages.length;

    // 실패율 계산해서 객체에 넣기
    for (let i = 1; i <= N; i++) {
        // 원소별 개수 세기
        const fail = stages.filter(e => e === i).length;
        obj[i] = fail/total;
        total -= fail;
    }
    
    // 객체를 2차원 배열로 변환
    const result = Object.entries(obj)
    .sort((a, b) => b[1] - a[1] || a[0] - b[0])
    .map(e => parseInt(e[0]));

    return result;
}
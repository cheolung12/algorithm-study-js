
function solution(progresses, speeds) {
    const remain = speeds.map((e,i) => Math.ceil((100-progresses[i]) / e));
    const answer = [];
    let temp = remain[0];
    let count = 0;
    for (let r of remain){
        if (temp < r){
            answer.push(count);
            temp = r;
            count = 1;
        }
        else 
            count++;
    }
    answer.push(count);
    return answer;
}
function solution(name) {
    // 상하 이동
    let answer = 0;
    // 좌우 이동
    let min_move = name.length - 1;
  
    [...name].map((n, i) => {
      answer += Math.min(n.charCodeAt() - 65, 91 - n.charCodeAt());
      let idx = i + 1;
  
      // 연속되는 A의 개수 count
      while (idx < name.length && name[idx] === 'A') {
        idx++;
      }
      // 좌우 이동 최소값
      min_move = Math.min(
        min_move,
        i * 2 + name.length - idx,
        i + 2 * (name.length - idx),
      );
    });
  
    return answer + min_move;
  }
const test = ["JEROEN", "JAN", "BBBAAAAAAB"];
for (let t of test){
    console.log(solution(t));
}

// 풀이 참조
// https://chamdom.blog/pg2-42860/
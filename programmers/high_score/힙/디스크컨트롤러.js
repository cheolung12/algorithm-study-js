function solution(jobs) {
    let start = 0;
    const total = jobs.length;
    let queue = [];
    let ans = 0;
  
    // 요청 시간 순으로 정렬
    jobs.sort((a, b) => a[0] - b[0]);
  
    while (jobs.length !== 0 || queue.length !== 0) {
      // 현재 시간 이전에 요청된 작업을 큐에 삽입
      while (jobs.length !== 0 && jobs[0][0] <= start) {
        queue.push(jobs.shift());
      }
  
      // 큐에 작업이 없는 경우, 다음 작업의 요청 시간으로 이동
      if (queue.length === 0) {
        start = jobs[0][0];
        continue;
      }
  
      // 큐에서 소요시간이 가장 짧은 작업 추출
      queue.sort((a, b) => a[1] - b[1]);
      const [requestTime, duration] = queue.shift();
  
      ans += start - requestTime + duration; // 시작시간 - 요청시간 + 소요시간
      start += duration; // 시작시간 조정
    }
  
    return Math.floor(ans / total);
  }
  

console.log(solution([[0, 3], [1, 9], [2, 6]]));
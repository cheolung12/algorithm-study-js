function solution(msg) {
  const list = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  // 사전 객체 생성
  const dic = list.reduce((d, a, i) => ((d[a] = i + 1), d), {});
  
  const ans = [];

  for (let i = 0; i < msg.length; i++) {
    let w = msg[i];
    let c = msg[i + 1];
    // 사전에 앞글자까지 포함한 단어가 있다면
    while (dic[w + c] && i < msg.length - 1) {
      i++;

      w = w + c;
      c = msg[i + 1];
    }

    ans.push(dic[w]);

    // 사전에 추가
    list.push(dic[w + c]);
    dic[w + c] = list.length;
  }

  return ans;
}

console.log(solution("TOBEORNOTTOBEORTOBEORNOT"));
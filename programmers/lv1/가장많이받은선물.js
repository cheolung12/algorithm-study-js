function solution(friends, gifts) {
  const N = friends.length;
  const ans = new Array(N).fill(0);

  // 선물 현황
  const giftArr = Array.from(Array(N), () => new Array(N).fill(0));

  gifts.forEach((el) => {
    const [from, to] = el.split(' ');
    giftArr[friends.indexOf(from)][friends.indexOf(to)] += 1;
  });

  // 선물 지수 계산
  const giftNum = [];
  for (let i = 0; i < N; i++) {
    const send = giftArr[i].reduce((acc, cur) => acc + cur, 0);
    const receive = giftArr.reduce((acc, cur) => acc + cur[i], 0);
    giftNum.push(send - receive);
  }

  // 다음달 선물 확인
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i === j) continue;
      if (giftArr[i][j] > giftArr[j][i]) {
        ans[i] += 1;
      } else if (giftArr[i][j] === giftArr[j][i]) {
        // 보낸횟수가 같다면 선물지수 확인
        if (giftNum[i] > giftNum[j]) {
          ans[i] += 1;
        }
      }
    }
  }

  return Math.max(...ans);
}

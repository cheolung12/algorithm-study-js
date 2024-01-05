function solution(numbers, hand) {
  let ans = '';
  const pad = [
    [1, 4, 7, '*'],
    [2, 5, 8, 0],
    [3, 6, 9, '#'],
  ];

  let currentL = '*';
  let currentR = '#';

  for (let number of numbers) {
    if (pad[0].includes(number)) {
      ans += 'L';
      currentL = number;
    } else if (pad[2].includes(number)) {
      ans += 'R';
      currentR = number;
    } else {
      if (ans.length === 0 && hand === 'right') {
        ans += 'R';
        currentR = number;
      } else if (ans.length === 0 && hand === 'left') {
        ans += 'L';
        currentL = number;
      } else {
        // 거리 계산
        const [centerX, centerY] = [1, pad[1].indexOf(number)];
        const [leftX, leftY] = pad[1].includes(currentL)
          ? [1, pad[1].indexOf(currentL)]
          : [0, pad[0].indexOf(currentL)];
        const [rightX, rightY] = pad[1].includes(currentR)
          ? [1, pad[1].indexOf(currentR)]
          : [2, pad[2].indexOf(currentR)];

        const leftDist = Math.abs(centerX - leftX) + Math.abs(centerY - leftY);
        const rightDist = Math.abs(centerX - rightX) + Math.abs(centerY - rightY);

        if (leftDist > rightDist) {
          ans += 'R';
          currentR = number;
        } else if (leftDist < rightDist) {
          ans += 'L';
          currentL = number;
        } else {
          if (hand === 'left') {
            ans += 'L';
            currentL = number;
          } else {
            ans += 'R';
            currentR = number;
          }
        }
      }
    }
  }
  return ans;
}

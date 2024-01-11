function solution(fees, records) {
  const parkingObj = {}, ans = [];
  const [baseTime, baseFee, unitTime, unitFee] = fees;

  for (let record of records) {
    const [time, carNum, state] = record.split(' ');
    const [h, m] = time.split(':');
    // 총 분으로 시간을 계산
    const acc = Number(h) * 60 + Number(m);

    if (state === 'IN') {
      parkingObj[carNum]
        ? (parkingObj[carNum][1] = acc)
        : (parkingObj[carNum] = [0, acc]);
    } else {
      parkingObj[carNum][0] += acc - parkingObj[carNum][1];
      parkingObj[carNum][1] = 'out';
    }
  }
  // console.log(parkingObj);

  for (let [key, value] of Object.entries(parkingObj)) {
    // 마지막 out 기록이 없는 차라면 23:59으로 시간 계산
    if (value[1] !== 'out') {
      parkingObj[key][0] += 1439 - value[1];
      parkingObj[key][1] = 0;
    }

    // 주차요금 계산
    if (value[0] <= baseTime) {
      ans.push([Number(key), baseFee]);
    } else {
      ans.push([
        Number(key),
        baseFee + Math.ceil((value[0] - baseTime) / unitTime) * unitFee,
      ]);
    }
  }

  // 차번호순으로 정렬 후 요금을 return
  return ans.sort((a, b) => a[0] - b[0]).map((el) => el[1]);
}
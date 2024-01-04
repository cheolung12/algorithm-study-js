function solution(today, terms, privacies) {
  const ans = [];

  // 년,월,일 추출
  const [todayY, todayM, todayD] = today.split('.').map((str) => Number(str));

  // term 배열을 object로 변환
  const termsObj = {};
  terms.forEach((term) => {
    const temp = term.split(' ');
    termsObj[temp[0]] = Number(temp[1]);
  });

  for (let i = 0; i < privacies.length; i++) {
    const [date, privacy] = privacies[i].split(' ');
    let [year, month, day] = date.split('.').map((str) => Number(str));

    month += termsObj[privacy];
    console.log(month);
    if (month > 12) {
      year += Math.floor(month / 12);
      month = Math.floor(month % 12);
    }
    day -= 1;
    if (day === 0) {
      month -= 1;
      day = 28;
    }
    if (month === 0) {
      year -= 1;
      month = 12;
    }

    console.log(`${year}-${month}-${day}`);

    // today와 비교
    if (todayY > year) {
      ans.push(i + 1);
      continue;
    } else if (todayY === year && todayM > month) {
      ans.push(i + 1);
      continue;
    } else if (todayY === year && todayM === month && todayD > day) {
      ans.push(i + 1);
    }
  }

  return ans;
}

/*
 1. 각각의 길이에 해당하는 코스요리 경우의수를 모두 세어서 객체에 저장 (제일 중요, 재귀 활용)
 2. 2번 이상 나온 것들만 candidates에 저장
 3. 2번 이상 나온 것들중 최대로 나온 메뉴들 출력
*/

function solution(orders, course) {
  const ordered = {};
  const candidates = {};
  const maxNum = Array(10 + 1).fill(0); // 1~10 인덱스 맞추기 위하여 +1
  const createSet = (arr, start, len, foods) => {
    if (len === 0) {
      ordered[foods] = (ordered[foods] || 0) + 1;
      // 2개 이상이면 후보에 집어넣기
      if (ordered[foods] > 1) candidates[foods] = ordered[foods];
      maxNum[foods.length] = Math.max(maxNum[foods.length], ordered[foods]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      // 재귀
      createSet(arr, i + 1, len - 1, foods + arr[i]);
    }
  };

  orders.forEach((od) => {
    // arr.sort는 기본적으로 사전식 배열
    const sorted = od.split('').sort();
    // 주문한 음식을 사전순으로 배열해서 문자열을 만든다.
    // course에 있는 길이만 만들면 된다.
    course.forEach((len) => {
      createSet(sorted, 0, len, '');
    });
    console.log(ordered);
  });

  const launched = Object.keys(candidates).filter(
    (food) => maxNum[food.length] === candidates[food]
  );

  return launched.sort();
}

// console.log(solution(['ABCFG', 'ABC'], [2, 3, 4]));
// 풀이 참고 했음
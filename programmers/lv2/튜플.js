function solution(s) {
  // 각각의 나눈 원소들을 담을 배열
  const elements = [];

  // 길이 순서로 정렬 후 각각의 원소를 elements 배열에 Push
  s.slice(2, -2)
    .replaceAll('{', '')
    .replaceAll('},', '|')
    .split('|')
    .sort((a, b) => a.length - b.length)
    .map((subStr) => subStr.split(','))
    .map((subArr) => subArr.forEach((el) => elements.push(Number(el))));

  // 중복 제거
  return [...new Set(elements)];
}

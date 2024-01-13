// 솔직히 다시 풀라해도 이건 못풀겠음.. 정규식 너무 싫어

function solution(files) {
  // 알파벳 대소문자 . 숫자 문자열의 나머지 부분 
  const re = /^([a-zA-Z-\. ]+)([0-9]+)(.*)$/;

  let dict = [];
  files.forEach((entry, idx) => {
    let [fn, head, num] = entry.match(re);
    console.log(entry.match(re));
    console.log(fn);
    console.log(head);
    console.log(num);
    console.log('------------------')
    dict.push({ fn, head: head.toLowerCase(), num: parseInt(num), idx });
  });

  console.log(dict);
  return dict
    .sort((a, b) => {
      // -1을 반환하면 원래 순서 유지
      if (a.head > b.head) return 1;
      if (a.head < b.head) return -1;
      if (a.num > b.num) return 1;
      if (a.num < b.num) return -1;
      return a.idx - b.idx;
    })
    .map((e) => e.fn);
}

console.log(solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]));
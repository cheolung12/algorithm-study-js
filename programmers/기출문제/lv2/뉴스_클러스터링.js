function solution(str1, str2) {
    let arr1 = [];
    let arr2 = [];
    
    // 각각의 배열에 2개씩 잘라서 push
    for(let i=0; i<str1.length-1; i++){
        arr1.push(str1.slice(i,i+2).toUpperCase());
    }
    for(let i=0; i<str2.length-1; i++){
        arr2.push(str2.slice(i,i+2).toUpperCase());
    }
    
    // 정규표현식으로 알파벳 쌍만 남긴다
    arr1 = arr1.filter(item => {
        return /^[a-zA-Z]*$/.test(item);
     });
    arr2 = arr2.filter(item => {
        return /^[a-zA-Z]*$/.test(item);
     });
    
    console.log(arr1);
    console.log(arr2);
    
    // 길이 비교용 set
    const set = new Set([...arr1, ...arr2]);
    
    let union = 0;
    let intersection = 0;

    // 같은 원소를 검사해서 많은 쪽은 union에 더하고 적은쪽은 intersection에 더한다.
    // 테케3 예외처리 (중복 문자들로만 이루어진 배열 때문에)
    set.forEach(item => {
    const has1 = arr1.filter(x => x === item).length;
    const has2 = arr2.filter(x => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  })
  return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
}
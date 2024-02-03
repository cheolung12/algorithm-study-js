// 올바른 괄호 검증 함수
const verify = (bracket) => {
  const stack = [];

  if (bracket[0] === ')') return false;
  for (let b of bracket) {
    if (b === '(') {
      stack.push('(');
    } else if (b === ')' && stack.length !== 0) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0 ? true : false;
};

function solution(p) {
  // 이미 올바른 괄호라면 return (1)
  if (verify(p)) return p;

  // u와 v로 분리 (2)
  let u = '', v = '';
  let cnt = 0;

  for (let i = 0; i < p.length; i++) {
    p[i] === "(" ? cnt++ : cnt--;
    if (cnt === 0) {
      u = p.slice(0, i + 1);
      v = p.slice(i + 1);
      break;
    }
  } 
  
  if(verify(u)){
    // 3-1
    return u + solution(v);
  } else {
    let str = "";
    // 4-1 ~ 4-3
    str += `(${solution(v)})`;
    // 4-4
    for (let j = 1; j < u.length - 1; j++) {
        u[j] === "(" ? (str += ")") : (str += "(");
    }
    // 4-5
    return str;
  }
}

console.log(solution(')('));
console.log(solution('()))((()'));

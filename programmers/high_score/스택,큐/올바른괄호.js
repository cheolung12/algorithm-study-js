// 로직은 맞았지만 효율성에서 전부 시간초과난 코드
// function solution(s){
//     if (s[0] === ')' || s[s.length-1] === '(')
//         return false
//
//     let temp = 0;
//     for (let b of s){
//         if(temp < 0)
//             return false;
//         if (b === '(')
//             temp++;
//         else 
//             temp--;
//     }
//     if (temp != 0)
//         return false;
//     return true;
// }

// for of 보다 for문이 더 빠름 
function solution(s) {
    if (s[0] === ')' || s[s.length - 1] === '(') {
        return false;
    }
    
    const stack = [];
    
    for (let i=0; i<s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i]);
        } else {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }
    
    return stack.length === 0;
}


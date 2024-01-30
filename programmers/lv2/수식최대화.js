function solution(expression) {
    function calculator(a, b, oper) {
      if (oper === '+') return a + b;
      if (oper === '*') return a * b;
      if (oper === '-') return a - b;
    }
    const combinations = [
      ['+', '*', '-'],
      ['+', '-', '*'],
      ['*', '+', '-'],
      ['*', '-', '+'],
      ['-', '*', '+'],
      ['-', '+', '*'],
    ];
  
    // 최소 숫자 정의 : -9007199254740991
    let answer = Number.MIN_SAFE_INTEGER;
  
    combinations.forEach((combination) => {
      const operands = expression.match(/[0-9]+/g).map(Number);
      //   console.log(operands);  숫자 배열
      const operators = expression.match(/[\*\+\-]/g);
      //   console.log(operators); 연산자 배열
      combination.forEach((c) => {
        let idx = operators.indexOf(c);
        // 해당 연산자가 없어질때 까지
        while (idx !== -1) {
          operands[idx] = calculator(operands[idx], operands[idx + 1], c); // 계산
          operands.splice(idx + 1, 1); // 계산한 숫자들 지우기
          operators.splice(idx, 1); // 사용한 연산자 지우기
          idx = operators.indexOf(c); // 같은 연산자 있는지 찾기
        }
      });
      if (answer < Math.abs(operands[0])) answer = Math.abs(operands[0]);
    });
    return answer;
  }
  
  solution('100-200*300-500+20');
  
  // 풀이 참고 하였음
  // 연산자가 최대 3개라는 점을 문제에서 강조하였다. => 경우의 수 다 구해봐도 되는 문제
# JS 알고리즘 문제 풀기

## ⌨️ 입력 방법
> 백준 물제 풀 때 필요한 Node.js 입력 방법

###  readline vs readFileSync
1. readFileSync 
```javascript
let n = require('fs').readFileSync('/dev/stdin').toString(); 
```
- 채점용 데이터를 문자열로 읽어오는 코드
- 코드가 간결하고 깔끔함
- 직접 데이터를 입력하고 실행할 수 없는 불편한 점이 있다.

2. readline ⭐️
```javascript
const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input;
rl.on('line', (line) => {
	input = line;
	rl.close();
});
rl.on('close', () => {
	console.log("Hello Goorm! Your input is " + input);
})
```
- 콘솔에서 데이터를 입력받음
- 데이터를 직접 입력하고 결과를 보는데 용이
=> readline을 쓰는게 좋다.
---


# `readline`
**콘솔에서 데이터를 입력받아 문자열로 변수에 할당**
```javascript
const readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
```
- 위 코드는 외워버리자
- 모듈의 `input`은 시스템 입력을 의미
- 모듈의 `output`은 시스템 출력을 의미

**위에서 만든 `readline` 모듈을 가지고 있는 `rl` 변수를 활용해 아래와 같은 코드를 작성**
```javascript
// 입력되는 모든 데이터를 가지고 있을 input 배열
let input = [];
rl.on('line', (line) => {
	input.push(line);
	rl.close();
});

rl.on('close', () => {
	console.log(input);
	rl.close();
})

```
- readline 모듈의 on() 메소드를 활용하여 입력을 받는다.
- `rl.on('line', ~~~)` <br/>
	line 이벤트는 rl.close()를 만나기 전까지, 계속 입력을 받는다.<br/>
    입력을 받는 기준은 줄 바꿈 
- `rl.on('close', ~~~)`<br/>
	close 이벤트는 rl.close()를 만난 후에 실행
    
    
<span style="color: red; font-weight: bold">즉, 자바스크립트는 입력을 받는 부분과 입력을 다 받은 데이터로 문제를 해결하는 방법으로 코드를 작성하면 조금 더 깔끔하게 데이터 입력을 처리할 수 있다.</span>


### readline으로 입력을 받을 때 주의할 점

1. 모든 입력이 문자열로 입력되게 때문에 적절하게 데이터를 처리해야 한다.
2. 입력을 받는 길이가 정확해야 한다. -> 모든 데이터가 잘 입력되었는지 반드시 확인, 데이터 입력이 2줄이라면 아래와 같이 코드 작성
```javascript
  let input = [];
  rl.on('line', (line) => {
      // 입력되는 문자열의 공백을 string.trim() 처리하여 제거합니다.
      // 이 경우에 input은 2차원 배열
      input.push(line.trim());
      // 문제에서 들어오는 입력이 2줄이기 때문에 input의 길이가 2면 입력을 종료
      if (input.length == 2){
          rl.close();
      }
  });

  rl.on('close', () => {
      console.log(input);
      rl.close();		// 두번째 rl.close()호출: 모든 작업이 완료되었음을 보장
  })
```
ex) 입력은 문자로 들어오기 때문에 숫자로 변경후 구조분해할당
```js
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = []
rl.on('line', (line) => {
	input.push(line.split(' ').map(Number)); // input : 100 30
	console.log(input); // output : [ [ 100, 30 ] ]
	rl.close();
});
rl.on('close', () => {
	const [num1, num2] = input[0];
})
```

<span style="color: blue; font-weight:bold;">이제 원하는 방식으로 입력을 받아오자.</span>

---


## 📝 정리
### 함수, 팁 정리
[![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=cu1210)](https://velog.io/@cu1210/JS%EB%A1%9C-%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%B2%98%EC%9D%8C-%EC%A4%80%EB%B9%84%ED%95%98%EB%A9%B4%EC%84%9C-%EC%95%8C%EA%B2%8C%EB%90%9C-%ED%95%A8%EC%88%98-%ED%8C%81)
### 정규표현식 관련 문제
- [신규아이디추천 (lv1)](https://github.com/cheolung12/algorithm-study-js/blob/main/programmers/lv1/%EC%8B%A0%EA%B7%9C%EC%95%84%EC%9D%B4%EB%94%94%EC%B6%94%EC%B2%9C.js)
- [파일명정렬 (lv2)](https://github.com/cheolung12/algorithm-study-js/blob/main/programmers/lv2/%ED%8C%8C%EC%9D%BC%EB%AA%85%EC%A0%95%EB%A0%AC.js)

[구름톤 링크](https://9oormthonchallenge.oopy.io/)
<br />

> **프로그래머스로만 JS 코테문제를 풀어왔다면 아래 코드가 생소하게 느껴질 거라고 생각한다. 해석해보자
**
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
    
    
<span style="color: red">**즉, 자바스크립트는 입력을 받는 부분과 입력을 다 받은 데이터로 문제를 해결하는 방법으로 코드를 작성하면 조금 더 깔끔하게 데이터 입력을 처리할 수 있다.**</span>


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

<span style="color: blue">**원하는 방식으로 입력을 받은다음에 올바르게 받아오자.**</span>
<br />
이제 맨 위에 있는 코드가 읽히겠지?
  
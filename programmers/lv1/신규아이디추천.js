function solution(new_id) {
    const answer = new_id
        // 1단계: 모두 소문자로
        .toLowerCase() 
        // 2단계: [영문자, -, _, .] 이 아닐 경우 => '' 공백으로
        .replace(/[^\w-_.]/g, '') 
        // 3단계: .이 한번 이상 반복되면 .으로
        .replace(/\.+/g, '.') 
        // 4단계: 문자열의 시작고 끝에 .이 있을경우 공백으로
        .replace(/^\.|\.$/g, '') 
        // 5단계: new_id가 빈문자열이라면 a로
        .replace(/^$/, 'a') 
        // 6단계: new_id가 16자 이상이면 15문자로 자르고 끝에 .이 있다면 .을 제거
        .slice(0, 15).replace(/\.$/, ''); 
    const len = answer.length;
    // 7단계 new_id가 2자 이하라면 new_id의 마지막 문자를 new_id의 길이가 3이 될때 까지 반복해서 붙임
    return len > 2 ? answer : answer + answer[answer.length-1].repeat(3 - len);
}

/*

 / : 정규식의 시작과 끝
 \ : escape
 [^xy] : not 을 표현하며  x 및 y 를 제외한 문자를 의미한다.
 \w : word 를 표현하며 알파벳 + 숫자 + _ 중의 한 문자임을 의미한다. 
 g : Global 의 표현하며 대상 문자열내에 모든 패턴들을 검색하는 것을 의미한다. 
 ^x : 문자열의 시작을 표현하며 x 문자로 시작됨을 의미한다.
 x+ : 반복을 표현하며 x 문자가 한번 이상 반복됨을 의미한다.
 x$ : 문자열의 종료를 표현하며 x 문자로 종료됨을 의미한다.
 
 정규식 출처: https://hamait.tistory.com/342 [HAMA 블로그:티스토리]
 */
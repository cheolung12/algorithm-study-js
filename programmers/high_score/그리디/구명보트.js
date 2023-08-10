function solution(people, limit) {
    let answer =0;
    people.sort ((a,b) => b-a)  
    for (let i=0, j= people.length - 1; i<=j ; i++ ) {
        if (people[i] + people [j] <= limit )
            j--;
        answer++;
    }
    return answer;
}

// 앞에거 하나 뒤에거 하나 이렇게 뽑아야함
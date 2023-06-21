function solution(survey, choices) {
    const map = new Map([
        ['R', 0], ['T', 0], ['C', 0], ['F', 0],
        ['J', 0], ['M', 0], ['A', 0], ['N', 0],
    ]);
    
    
    for (let i=0; i<survey.length; i++){
        if(0 < choices[i] && choices[i] < 4)
            map.set(survey[i][0], map.get(survey[i][0]) + Math.abs(choices[i]-4));
        else if(4 < choices[i] && choices[i] < 8){
            map.set(survey[i][1], map.get(survey[i][1]) + choices[i]-4);
        }
    }
    
    let answer = "";
    const arr = [...map];
    
    for(let j=0; j<arr.length; j+=2){
        if(arr[j][1] === arr[j+1][1] || arr[j][1] > arr[j+1][1])
            answer += arr[j][0];
        else 
            answer += arr[j+1][0]
    }
    
    console.log(map);
    return answer;
    
}
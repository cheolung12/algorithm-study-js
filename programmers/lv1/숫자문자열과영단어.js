function solution(s) {
    const obj = {
        "zero" : "0",
        "one" : "1",
        "two" : "2",
        "three" : "3",
        "four" : "4",
        "five" : "5",
        "six" : "6",
        "seven" : "7",
        "eight" : "8",
        "nine" : "9",
    };
    let result = ""
    let temp = ""
    
    for (let i of s){
        if (isNaN(i) === false){
            result += i;
            continue;
        }
        temp += i;
        if(obj[temp]){
            result += obj[temp];
            temp = "";
        }
    }
    return parseInt(result);
}


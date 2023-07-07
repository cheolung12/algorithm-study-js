function solution(a, b) {
    const day = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
    let last = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    for(let i=1; i<last.length; i++){
        last[i] = last[i-1] + last[i]
    } 
    console.log(last);
    if (a === 1){
        return day[b % 7];
    }
    else
        return day[(last[a-2] + b) % 7];
}
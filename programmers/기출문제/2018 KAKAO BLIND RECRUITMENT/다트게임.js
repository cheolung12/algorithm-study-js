function solution(dartResult) {
    const score = [];
    let num = "";
    for (let i=0; i<dartResult.length; i++){
        let l = score.length
        if (isNaN(dartResult[i]) === false){
            num += dartResult[i].toString(); 
            if (i < dartResult.length-1 && isNaN(dartResult[i+1]) === false)
                 continue;
            else
                score.push(+num);
                num = "";
        }
        else{
            if (dartResult[i] === 'S')
                continue
            else if (dartResult[i] === 'D')
                score[l-1] **= 2;
            else if (dartResult[i] === 'T')
                score[l-1] **= 3;
            else if (dartResult[i] === '*'){
                if (l < 2)
                    score[l-1] *= 2;
                else{
                    score[l-1] *= 2;
                    score[l-2] *= 2;
                }
            }
            else if (dartResult[i] ==='#')
                score[l-1] *= (-1);
            }
            console.log(score);
        }
    return score.reduce((acc, cur) => acc + cur , 0);
}
   
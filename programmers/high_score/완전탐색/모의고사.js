function solution(answers) {
    const a = [1,2,3,4,5];
    const b = [2,1,2,3,2,4,2,5];
    const c = [3,3,1,1,2,2,4,4,5,5];
    const correct = [0,0,0];
    
    for(let i=0; i<answers.length; i++){
        if (a[i%5] === answers[i]){
            correct[0] += 1;
        }
        if (b[i%8] === answers[i]){
            correct[1] += 1;
        }
        if (c[i%10] === answers[i]){
            correct[2] += 1;
        }
    }
    
    const m = Math.max(...correct);
    const ans = [];
    for(let i=0; i<3; i++){
        if(correct[i] === m)
            ans.push(i+1);
    }
    return ans;
}
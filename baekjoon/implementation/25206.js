const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
    input.push(line.split(' ').filter((_, idx) => idx >= 1));
    if(input.length === 20){
        rl.close()
    }
})

rl.on('close', () => {
    const map = new Map([
        ['A+', 4.5],
        ['A0', 4.0],
        ['B+', 3.5],
        ['B0', 3.0],
        ['C+', 2.5],
        ['C0', 2.0],
        ['D+', 1.5],
        ['D0', 1.0],
        ['F', 0.0],
    ]);
    let sum = 0, mul=0;

    for(let [score, grade] of input){
        if(grade === 'P'){
            continue;
        }
        mul += Number.parseFloat(Number(score) * map.get(grade));
        sum += Number(score);
    }
    console.log(Number.parseFloat(mul/sum).toFixed(6));
});


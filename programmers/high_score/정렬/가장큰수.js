function solution(numbers) {
    let sorted = numbers
        .map((e) => e.toString())
        .sort((a,b) => ((b+a) - (a+b)))
        .join('');
    
    return sorted[0] === '0' ? '0' : sorted ;
}
// sort부분은 그냥 외워야함..
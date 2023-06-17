function solution(n, lost, reserve) {
    const stu = Array(n).fill(1)
    
    for (idx of reserve){
        stu[idx-1] += 1;
    }
    
    for (idx of lost){
        stu[idx-1] -= 1;
    }
    
    for(let i=0; i<n; i++){
        if (stu[i] === 0) {
            if (stu[i-1] === 2){
                stu[i-1] -= 1;
                stu[i] += 1;
            } else if (stu[i+1] === 2){
                stu[i+1] -= 1;
                stu[i] += 1;
            }
        }
    }
    return stu.filter((e) => e !== 0).length;
}

// 처음에는 체육복이 2개인 사람이 빌려주는 식을 코딩했으나 예외처리가 까다로웠음
// 반대로 생각해서 체육복이 0개인 사람이 빌려오는 형식으로 코딩하니까 훨씬 쉬웠다
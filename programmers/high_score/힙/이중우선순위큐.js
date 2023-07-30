function solution(operations) {
    const que = [];
    const ans = [0,0];
    
    for(let oper of operations){
        if(que.length==0 && (oper === "D 1" || oper === "D -1")){
            continue;
        }
        if(oper === "D 1"){
            que.sort((a,b) => a-b);
            que.pop();
        }
        else if(oper === "D -1"){
            que.sort((a, b) => a-b);
            que.shift();
        }
        else{
            que.push(oper.slice(2, oper.length));
        }
    }
    
    if (que.length === 0)
        return ans;
    else{
        que.sort((a,b)=> a-b);
        if(que.lenght === 1)
            ans[0] = que[0];
        else{
            ans[0] = que[que.length-1];
            ans[1] = que[0];
        }
        return ans.map((e) => parseInt(e));
    }
}

// 마지막 조건은 삼항연산자로 간략하게 쓰자
// return que.length ? [Math.max(...que), Math.min(...que)] : [0, 0];
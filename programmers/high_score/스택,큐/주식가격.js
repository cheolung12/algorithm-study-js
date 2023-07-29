const solution = (prices) => {
    const ans = [];
    const l = prices.length;
    let cnt = 0;
    
    for (let i=0; i<l-1; i++){
        cnt = 0;
        for (let j=i+1; j<l; j++){
            cnt++;
            if(prices[i] > prices[j]){
                break;
            }
        }
        ans.push(cnt);
    }
    ans.push(0);
    return ans;
}
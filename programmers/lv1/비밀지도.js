function solution(n, arr1, arr2) {
    for (let i=0; i < arr1.length; i++){
        arr1[i] = arr1[i].toString(2).padStart(n,0);
        arr2[i] = arr2[i].toString(2).padStart(n,0);
    }
    
    let ans = [];
    for (let j=0; j < arr1.length; j++){
        let str = "";
        for(let k=0; k < arr1[0].length; k++){
            if (arr1[j][k] == 1 | arr2[j][k] == 1)
                str += "#";
            else
                str += " ";
        }
        
        ans.push(str)
    }
    return ans;
}
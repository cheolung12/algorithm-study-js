function solution(citations) {
    const l = citations.length;
    citations = citations.sort((a,b) => a-b);
    for(let i=0; i<l; i++){
        if(citations[i] >= l-i){
            return l-i;
        }
    }
    return 0;
}
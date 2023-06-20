const solution = (participant, completion) => {
    const map = new Map();
    for (let p of participant){
        map.set(p, (map.get(p) || 0) + 1);
    }
    for (let c of completion){
        map.set(c, map.get(c)-1)
    }
    for (let [k, v] of map){
        if (v == 1){
            return k;
        }
    }
}
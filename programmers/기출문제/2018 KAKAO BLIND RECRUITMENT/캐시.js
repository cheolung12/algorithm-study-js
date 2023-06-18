function solution(cacheSize, cities) {
    cities = cities.map((e) => e = e.toUpperCase())
    let run_time = 0;
    const cache = [];
    let idx = 0;
    
    if (cacheSize === 0)
        return cities.length * 5;
    
    for (city of cities){
        if (cache.includes(city)){
            run_time += 1;
            idx = cache.indexOf(city)
            cache.splice(idx, 1);
        }
        else {
            run_time += 5;
            if(cache.length === cacheSize){
                cache.shift();
            }
        }
        cache.push(city);
        // console.log(cache);
        // console.log(run_time);
    }
    return run_time;
}
const solution = (sizes) => {
    const arr1 = [];
    const arr2 = [];
    sizes.forEach((e) => {
        e.sort((a,b) => b-a);
        arr1.push(e[0]);
        arr2.push(e[1]);
    })
    return Math.max(...arr1) * Math.max(...arr2);    
} 
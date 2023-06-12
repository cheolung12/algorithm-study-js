// const solution = (arr) => {
//     const ans = [arr[0]];
//     for (let i=1; i < arr.length; i++){
//        if (arr[i] !== arr[i-1])
//             ans.push(arr[i]);
//    }
//     return ans;
// }

const solution = (arr) => arr.filter((e,i) => e != arr[i-1]);
const isPrime = (num) => {
  if (num === 0 || num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

function solution(n, k) {
  let temp = '';
  let count = 0;
  for (let number of n.toString(k)) {
    // console.log("number", number);
    if (number === '0' && temp !== '') {
      if (!isPrime(Number(temp))) {
        temp = '';
        continue;
      } else {
        // console.log("prime", temp);
        count++;
        temp = '';
        continue;
      }
    }
    temp += number;
  }

  // 마지막 하나
  return isPrime(Number(temp)) ? ++count : count;
}

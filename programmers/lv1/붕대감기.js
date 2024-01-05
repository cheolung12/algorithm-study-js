function solution(bandage, health, attacks) {
  const [t, x, y] = bandage;
  const attackTime = attacks.map((attack) => attack[0]);
  const damage = attacks.map((attack) => attack[1]);
  let ans = health;
  let count = 0;

  for (let i = attackTime[0]; i <= attackTime[attackTime.length - 1]; i++) {
    // 공격 당할 경우
    if (attackTime.includes(i)) {
      ans -= damage[attackTime.indexOf(i)];
      count = 0;
      if (ans <= 0) return -1;
    } else {
      // 아닐 경우 회복
      count++;
      if (count === t) {
        ans += x + y;
        count = 0;
      } else {
        ans += x;
      }
      if (ans > health) {
        ans = health;
      }
    }
  }
  return ans;
}

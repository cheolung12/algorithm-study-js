function solution(m, musicinfos) {
  const ans = [];

  for (let musicinfo of musicinfos) {
    const [start, end, title, music] = musicinfo.split(',');

    // 총 음악 재생 시간 구하기
    const [startH, startM] = start.split(':');
    const [endH, endM] = end.split(':');
    const musicTime = endH * 60 + Number(endM) - (startH * 60 + Number(startM));

    // 총 재생 시간에 맞춰서 멜로디 나열
    let idx = 0,
      count = 0;
    let melody = '';
    while (count < musicTime) {
      melody += music[idx % music.length];
      if (music[idx % music.length] !== '#') {
        count++;
      }
      idx++;
    }

    if (melody.includes(m) && melody[melody.indexOf(m) + m.length] !== '#')
      ans.push([title, musicTime]);
  }

  if (ans.length === 0) return '(None)';
  else return ans.sort((a, b) => b[1] - a[1])[0][0];
}

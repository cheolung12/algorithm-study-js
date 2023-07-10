function solution(genres, plays) {
    // input 객체화 시키기 (reduce메서드의 누산값을 객체로)
    const chart = genres.reduce((obj, genre, i) => {
      if (!obj[genre]) {
        obj[genre] = { playCount: plays[i], list: [] };
      } else {
        obj[genre].playCount += plays[i];
      }
      obj[genre].list.push([i, plays[i]]);
      
      return obj;
    }, {});
      
    console.log(chart);
  
    // 객체 정렬
    const sorted = Object.values(chart).sort((a, b) => {
      // 내림차순 정렬
      return b.playCount - a.playCount;
    });
    console.log(sorted);
  
    // 정렬한 sorted를 사용한다.
    const answer = sorted.reduce((acc, genre) => {
      genre.list.sort((a, b) => {
        return b[1] - a[1];
      });
      acc.push(genre.list[0][0]);
  
      if (genre.list.length > 1) {
        acc.push(genre.list[1][0]);
      }
      return acc;
    }, []);
  
    return answer;
  }
  
  // 풀이 참고 : https://algoroot.tistory.com/64
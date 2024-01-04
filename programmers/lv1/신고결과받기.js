function solution(id_list, report, k) {
  const reportObj = {};
  const reportedNum = {};
  const ans = new Array(id_list.length).fill(0);

  id_list.forEach((id) => {
    reportObj[id] = [];
    reportedNum[id] = 0;
  });

  report.forEach((el) => {
    const [from, to] = el.split(' ');
    if (!reportObj[from].includes(to)) {
      reportObj[from].push(to);
      reportedNum[to] += 1;
    }
  });

  // console.log(reportObj);
  // console.log(reportedNum);

  Object.values(reportObj).forEach((el, index) => {
    el.forEach((id) => {
      if (reportedNum[id] >= k) {
        ans[index] += 1;
      }
    });
  });

  return ans;
}

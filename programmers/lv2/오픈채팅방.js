function solution(record) {
  const userInfo = {};
  let messages = [];

  for (let r of record) {
    const [state, uid, user] = r.split(' ');
    if (state === 'Enter') {
      userInfo[uid] = user;
      messages.push([uid, state]);
    } else if (state === 'Leave') {
      messages.push([uid, state]);
    } else if (state === 'Change') {
      userInfo[uid] = user;
    } else {
      return -1;
    }
  }

  return Array.from(
    messages,
    (message) =>
      `${userInfo[message[0]]}님이 ${
        message[1] === 'Enter' ? '들어왔습니다' : '나갔습니다'
      }.`
  );
}

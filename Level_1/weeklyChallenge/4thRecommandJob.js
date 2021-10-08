/*
문제 이름 :위클리 챌린지 4주차_직업군 추천하기
링크 : https://programmers.co.kr/learn/courses/30/lessons/84325?language=javascript
 */

//첫 번째 풀이
function recommandJob() {
  return table
    .map((r) => r.split(" "))
    .map((t) => [...t.splice(0, 1), t])
    .map(([t, arr]) => [
      t,
      languages.reduce((acc, l, i) => {
        acc +=
          (5 - (arr.indexOf(l) === -1 ? 5 : arr.indexOf(l))) * preference[i];
        return acc;
      }, 0),
    ])
    .sort((a, b) => b[1] - a[1] - (a[0] < b[0]))[0][0];
}

//다른 풀이
function solution(table, languages, preference) {
  var answer = "",
    max = 0;

  table.forEach((row) => {
    const [category, ...ranks] = row.split(" ");
    let sum = 0;
    for (let i = 0; i < languages.length; i++) {
      const rank = ranks.findIndex((lang) => lang === languages[i]);
      if (rank === -1) continue;
      sum += (ranks.length - rank) * preference[i];
    }

    if (max < sum) {
      max = sum;
      answer = category;
    } else if (max === sum) {
      answer = [answer, category].sort()[0];
    }
  });

  return answer;
}

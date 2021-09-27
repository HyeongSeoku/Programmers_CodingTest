/*
문제 이름 : 수박수박수박수박수박수?
링크 : https://programmers.co.kr/learn/courses/30/lessons/12922?language=javascript
 */

function waterMelonWat(n) {
  var answer = "";
  for (var i = 0; i < n; i++) {
    if (i % 2 == 0) {
      answer += "수";
    } else answer += "박";
  }
  return answer;
}

/*
문제 이름 : 문자열 내림차순으로 배치하기
링크 : https://programmers.co.kr/learn/courses/30/lessons/12917?language=javascript
 */

function stringDescSort(s) {
  const cutS = s.split("").sort().reverse().join("");
  return cutS;
}

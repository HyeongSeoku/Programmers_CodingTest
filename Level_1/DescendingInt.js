/*
문제 이름 : 정수 내림차순으로 배치하기
링크 : https://programmers.co.kr/learn/courses/30/lessons/12933?language=javascript
 */
function descendingInt(n) {
  var answer = 0;
  var resultArr = String(n).split("");

  resultArr = resultArr.sort((a, b) => b - a);
  resultArr.map((item) => (answer += item));

  return Number(answer);
}

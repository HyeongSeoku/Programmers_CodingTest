/*
문제 이름 : 나누어 떨어지는 숫자 배열
링크 : https://programmers.co.kr/learn/courses/30/lessons/12910?language=javascript
 */

function divisorArr(arr, divisor) {
  var answer = [];
  arr.map((element) => (element % divisor === 0 ? answer.push(element) : ""));

  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

function divisorArr_filter(arr, divisor) {
  var answer = arr.filter((v) => v % divisor == 0);
  return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}

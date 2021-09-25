/*
문제 이름 : 약수의 합
링크 : https://programmers.co.kr/learn/courses/30/lessons/12928?language=javascript
 */
function solution(n) {
  var answer = 0;
  for (var i = 1; i <= n; i++) {
    if (n % i == 0) {
      answer += i;
    }
  }
  return answer;
}

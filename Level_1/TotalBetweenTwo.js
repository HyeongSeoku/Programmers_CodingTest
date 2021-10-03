/*
문제 이름 : 두 정수 사이의 합
링크 : https://programmers.co.kr/learn/courses/30/lessons/12912?language=javascript
 */

//가우스 공식 이용...
//Math.abs = 절대값 구하는 메소드
function TotalBTwo(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}

//=========기존 풀이 ================
function TotalBTwo_Basic(a, b) {
  var answer = 0;
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) answer += i;
  return answer;
}

//삼항 연산자 사용
function TotalBTwo_ternaryOperator(a, b) {
  var answer = 0;
  answer = a < b ? a : b;
  while (a != b) {
    answer += a < b ? ++a : ++b;
  }
  return answer;
}

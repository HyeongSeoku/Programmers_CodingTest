/*
문제 이름 : 하샤드 수
링크 : https://programmers.co.kr/learn/courses/30/lessons/12947?language=javascript
*/

function harshadNumber(x) {
  var answer = true;
  var digit = 0;
  var tmp = String(x).split("");

  for (var i = 0; i < tmp.length; i++) {
    digit += parseInt(tmp[i]);
  }

  answer = x % digit === 0 ? true : false;
  return answer;
}

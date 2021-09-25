/*
문제 이름 : 이상한 문자 만들기
링크 : https://programmers.co.kr/learn/courses/30/lessons/12930?language=javascript
 */

//toUpperCase , toLowerCase
function weirdString(s) {
  var answer = "";
  var tmpString = s.split(" ");
  for (var i = 0; i < tmpString.length; i++) {
    for (var j = 0; j < tmpString[i].length; j++) {
      if (j % 2 == 0) {
        answer += tmpString[i][j].toUpperCase();
      } else {
        answer += tmpString[i][j].toLowerCase();
      }
    }
    if (i == tmpString.length - 1) {
      break;
    }
    answer += " ";
  }
  return answer;
}

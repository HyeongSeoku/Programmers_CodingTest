/*
문제 이름 : 문자열 내 p와 y의 개수
링크 : https://programmers.co.kr/learn/courses/30/lessons/12916?language=javascript
 */

function CountP_Y(s) {
  var answer = true;
  var pCount = 0,
    yCount = 0;
  var sArr = [];
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  s = s.toLowerCase();
  sArr = s.split("");
  for (var i = 0; i < sArr.length; i++) {
    if (sArr[i] === "p") {
      pCount++;
    } else if (sArr[i] === "y") {
      yCount++;
    }
  }
  if (pCount !== yCount) {
    answer = false;
  }
  return answer;
}

/*
function numPY(s) {
  return s.match(/p/ig).length == s.match(/y/ig).length;
}
*/

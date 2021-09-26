/*
문제 이름 : 시저 암호
링크 : https://programmers.co.kr/learn/courses/30/lessons/12926?language=javascript
 */
function caeserPwd(s, n) {
  var answer = "";
  var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChar = "abcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < s.length; i++) {
    const str = s[i];

    //공백인 경우
    if (str == " ") {
      answer += " ";
      // 빼먹어서 오류남
      continue;
    }
    const upperOrlower = upperChar.includes(str) ? upperChar : lowerChar;
    let index = upperOrlower.indexOf(str) + n;
    if (index >= upperOrlower.length) {
      index -= upperOrlower.length;
    }
    answer += upperOrlower[index];
  }

  return answer;
}

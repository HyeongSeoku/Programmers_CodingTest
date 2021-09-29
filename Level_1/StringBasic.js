/*
문제 이름 : 문자열 다루기 기본
링크 : https://programmers.co.kr/learn/courses/30/lessons/12918?language=javascript
*/
function solution(s) {
  const strLength = s.length;

  if (strLength === 4 || strLength === 6) {
    return s.split("").every((i) => !isNaN(i));
  }
  return false;
}

/* 오답
function solution(s) {
    var answer = false;
    if((s.length==4 ||s.length==6) && !isNaN(Number(s))){
        answer = true;
    }
    return answer;
}
//Number()은  e 도 지수로 인식하여 숫자로 변환
*/

/*
문제 이름 : 가운데 글자 가져오기
링크 : https://programmers.co.kr/learn/courses/30/lessons/12903?language=javascript
 */

//첫 번째 풀이
function centerChar(s) {
  //삼항 연산자 사용
  return s.length % 2 == 0
    ? s[s.length / 2 - 1] + s[s.length / 2] //짝수일때
    : s[Math.floor(s.length / 2)]; //홀수일때
}

//다른 풀이
function centerChar_subString(s) {
  //substring 사용 : string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환합니다.
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

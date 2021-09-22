/*
문제 이름 : 핸드폰 번호 가리기
링크 : https://programmers.co.kr/learn/courses/30/lessons/12948?language=javascript
 */

function solution(phone_number) {
  var answer = "";
  answer +=
    "*".repeat(phone_number.length - 4) + String(phone_number.slice(-4));
  return answer;
}

/*
    repeat() : repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.
    slice() : slice() 메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다

    ==============================================================
    다른 풀이 : 정규 표현식
    공식 문서 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp

    function hide_numbers(s) {
    return s.replace(/\d(?=\d{4})/g, "*");
    }
 */

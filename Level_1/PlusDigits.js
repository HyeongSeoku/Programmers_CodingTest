/*
문제 이름 : 자릿수 더하기
링크 : https://programmers.co.kr/learn/courses/30/lessons/12931?language=javascript
 */
function plusDigits(n) {
  // 문자 풀이
  // return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)

  // 숫자 풀이
  var answer = 0;

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  do {
    answer += n % 10;
    n = Math.floor(n / 10);
  } while (n > 0);

  return answer;
}

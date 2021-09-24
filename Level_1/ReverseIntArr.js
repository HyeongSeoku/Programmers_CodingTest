/*
문제 이름 : 자연수 뒤집어 배열로 만들기
링크 : https://programmers.co.kr/learn/courses/30/lessons/12932?language=javascript
 */
const solution = (n) => {
  // 문자풀이
  // return String(n).split("").reverse().map((v) => parseInt(v));

  // 숫자풀이
  var arr = [];

  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
};

/*
============ 틀린풀이 ============
const solution = (n) => {
  return String(n)
    .split("")
    .sort((a,b)=>b-a)
    .map((v) => parseInt(v));
};
============ 틀린풀이 ============

reverse() : reverse() 메서드는 배열의 순서를 반전합니다
sort() : sort() 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다
 */

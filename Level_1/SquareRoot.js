/*
문제 이름 : 정수 제곱근 판별
링크 : https://programmers.co.kr/learn/courses/30/lessons/12934?language=javascript
 */
function getSqrt(n) {
  let sqrt = Math.sqrt(n);
  return sqrt % 1 == 0 ? (sqrt + 1) * (sqrt + 1) : -1;
}

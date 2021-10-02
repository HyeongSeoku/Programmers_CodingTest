/*
문제 이름 : 문자열 내 마음대로 정렬하기
링크 : https://programmers.co.kr/learn/courses/30/lessons/12915?language=javascript
 */

function solution(strings, n) {
  //n번째 글자가 같으면 문자열을 비교, 같지 않으면 n번째 글자 비교해서 정렬
  //localCompare() : 기준 문자열과 비교했을 때 비교 대상 문자열이 정렬상 전에 오는지, 후에 오는지 혹은 같은 순서에 배치되는지를 알려주는 숫자를 리턴
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}

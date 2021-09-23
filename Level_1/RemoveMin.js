/*
문제 이름 : 제일 작은 수 제거하기
링크 : https://programmers.co.kr/learn/courses/30/lessons/12937?language=javascript
 */
function removeMin(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}

/*
참조
splice : splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
indexOf : indexOf() 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
Math.min : Math.min() 함수는 주어진 숫자들 중 가장 작은 값을 반환합니다
*/

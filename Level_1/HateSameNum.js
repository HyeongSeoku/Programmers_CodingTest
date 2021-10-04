/*
문제 이름 : 같은 숫자는 싫어
링크 : https://programmers.co.kr/learn/courses/30/lessons/12906?language=javascript
 */

//첫번째 풀이
function hateSameNum(arr) {
  var answer = [];
  var prev = -1;
  for (var i = 0; i < arr.length; i++) {
    if (i != 0) prev = arr[i - 1];

    if (prev == arr[i]) continue;
    else answer.push(arr[i]);
  }
  return answer;
}

//다른 풀이
function hateSameNum_filter(arr) {
  //다음 인덱스의 값과 현재 값이 같지 않은것을 filter
  return arr.filter((val, index) => val != arr[index + 1]);
}

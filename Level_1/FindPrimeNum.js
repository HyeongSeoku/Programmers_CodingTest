/*
문제 이름 : 소수 찾기
링크 : https://programmers.co.kr/learn/courses/30/lessons/12921?language=javascript
 */
function solution(n) {
  var answer = 0;
  var arr = new Array(n + 1).fill(true);
  arr.splice(0, 2, false, false);
  for (var i = 2; i <= n; i++) {
    if (arr[i])
      //j+i 는 오답(시간초과) , j+=i는 정답
      for (var j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
  }
  answer = arr.filter((i) => i == true).length;
  console.log(answer);
  return answer;
}

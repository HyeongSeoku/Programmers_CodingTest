/*
문제 이름 : 콜라츠 추측
링크 : https://programmers.co.kr/learn/courses/30/lessons/12943?language=javascript
 */
function collatz(num) {
  var answer = 0;
  var cnt = 0;

  while (num != 1 && cnt != 500) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
    cnt++;
  }
  answer = num == 1 ? cnt : -1;
  return answer;
}

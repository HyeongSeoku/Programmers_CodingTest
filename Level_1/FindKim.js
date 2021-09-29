/*
문제 이름 : 서울에서 김서방 찾기
링크 : https://programmers.co.kr/learn/courses/30/lessons/12919?language=javascript
 */

function solution(seoul) {
  var answer = "";
  const index = seoul.indexOf("Kim");
  answer = `김서방은 ${index}에 있다`;
  return answer;
}

/*
다른 풀이
function solution(seoul) {
    var answer = '';
    const index = seoul.findIndex(element=>element == "Kim");
    answer = `김서방은 ${index}에 있다`;
    return answer;
}
*/

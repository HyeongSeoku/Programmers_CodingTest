/*
문제 이름 : 평균 구하기
링크 : https://programmers.co.kr/learn/courses/30/lessons/12944?language=javascript
*/
function getAverage(arr) {
  var answer = 0;
  arr.map((item) => {
    answer += item;
  });
  answer = answer / arr.length;
  return answer;
}

//reduce : reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
/*
reduce 를 사용한 방식

function getAverage(arr) {
    return arr.reduce((a,b)=>a+b)/arr.length;
}
*/

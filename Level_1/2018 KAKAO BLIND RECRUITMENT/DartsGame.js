/*
문제 이름 : 2018 KAKAO BLIND RECRUITMENT [1차] 다트 게임
링크 : https://programmers.co.kr/learn/courses/30/lessons/17682?language=javascript
 */

//첫 번째 풀이
function dartGame() {
  var answer = [];
  var sum = 0; //총 합계 저장할 변수
  var tmp = 0; //숫자를 저장할 변수
  for (var i = 0; i <= dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        //10인 경우
        tmp = 10;
        i++;
      } else {
        //한자리 숫자일 경우
        tmp = dartResult[i];
      }
    } else if (dartResult[i] === "S") {
      answer.push(tmp);
    } else if (dartResult[i] === "D") {
      answer.push(Math.pow(tmp, 2));
    } else if (dartResult[i] === "T") {
      answer.push(Math.pow(tmp, 3));
    } else if (dartResult[i] == "#") {
      //아차상
      //answer.length-1 인 이유 : 이미 tmp를 push한 후기때문에
      //추가적인 push 필요없이 answer의 가장 마지막 인덱스 (가장 마지막에 들어간.)에 -1을 곱해주면 된다
      answer[answer.length - 1] *= -1;
    } else if (dartResult[i] == "*") {
      //스타상
      answer[answer.length - 2] *= 2; //전에 얻은 점수
      answer[answer.length - 1] *= 2; //해당 점수
    }
  }
  for (var j = 0; j < answer.length; j++) {
    sum += Number(answer[j]);
  }

  return sum;
}

//다른 풀이

/*
문제 이름 : 2018 KAKAO BLIND RECRUITMENT [1차] 비밀지도
링크 : https://programmers.co.kr/learn/courses/30/lessons/17681?language=javascript
 */

//첫 번째 풀이
function secretMap(n, arr1, arr2) {
  var answer = [];
  for (var i = 0; i < n; i++) {
    var dec1 = arr1[i].toString(2); //arr1 2진수 변환
    var dec2 = arr2[i].toString(2); //arr2 2진수 변환
    var tmp = ""; //행값을 담을 문자열
    dec1 =
      dec1.length < n
        ? ("0".repeat(n - dec1.length) + dec1).split("") //행의 길이가 n보다 작으면 repeat으로 앞에 0을 채워줌
        : dec1.split("");
    dec2 =
      dec2.length < n
        ? ("0".repeat(n - dec2.length) + dec2).split("")
        : dec2.split("");
    for (var j = 0; j < n; j++) {
      if (dec1[j] === "0" && dec2[j] === "0") {
        tmp += " ";
      } else if (dec1[j] === "1" || dec2[j] === "1") {
        tmp += "#";
      }
    }
    answer[i] = tmp;
  }

  return answer;
}
//다른 풀이
//padStart, replace와 정규표현식을 활용
var secretMap_replace = (n, a, b) =>
  a.map((a, i) =>
    (a | b[i]).toString(2).padStart(n, 0).replace(/0/g, " ").replace(/1/g, "#")
  );

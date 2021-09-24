/*
문제 이름 : 정수 내림차순으로 배치하기
링크 : https://programmers.co.kr/learn/courses/30/lessons/12933?language=javascript
 */
function descendingInt(n) {
  var answer = 0;
  var resultArr = String(n).split("");

  resultArr = resultArr.sort((a, b) => b - a);
  resultArr.map((item) => (answer += item));

  return Number(answer);
}

//문자보다 숫자로 진행하는것이 처리속도가 더 빠르다
/*
function solution(n) {
    //숫자가 분명히 더 빠름
    var nums =[];
    do{
        nums.push(n%10);
        n=Math.floor(n/10);
    } while(n>0)

    return nums.sort((a,b)=>b-a).join('')*1;
    //문자는 느림
    return (n+"").split('').sort((a,b)=>b-a).join('')*1;
}
 */

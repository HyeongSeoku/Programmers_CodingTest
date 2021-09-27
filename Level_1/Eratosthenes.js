/*
    소수를 구하는데 많이 사용되는 "에라토스테네스의 체"를 구현한 메소드 입니다.
 */

function eratosthenes(n) {
  var arr = new Array(n + 1);

  //0과 1은 소수가 아님
  arr[0] = false;
  arr[1] = false;
  //해당 인덱스에 해당 값 추가. (2부터 시작)
  for (var z = 2; z <= n; z++) {
    arr[z] = z;
  }

  //
  for (var i = 2; i <= n; i++) {
    //if (arr[i] === 0) continue;
    for (var j = i * i; j <= n; j += i) {
      arr[j] = 0;
    }
  }

  var primeNum = arr.filter((i) => i != 0);
  //소수 개수 구하는 과정
  var primeLength = primeNum.length;
  console.log("소수의 개수 :", primeLength);
  return primeNum;
}

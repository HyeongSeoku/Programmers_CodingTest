function range(start, end) {
  let array = [];
  for (let i = start; i <= end; ++i) {
    array.push(i);
  }
  return array;
}

function sum(array) {
  var result = 0;

  for (let i = 0; i < array.length; ++i) {
    result += array[i];
  }
  return result;
}

function solution(price, money, count) {
  var answer = -1;
  const countArr = range(1, count);
  var result;
  result = sum(countArr.map((cnt) => cnt * price));
  result > money ? (answer = result - money) : (answer = 0);
  return answer;
}

solution(3, 20, 4);

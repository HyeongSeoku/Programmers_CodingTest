function solution(n, m) {
  var answer = [];
  //최대공약수 : 유클리드 호제법
  const greatest = (a, b) => {
    if (b === 0) return a;
    return greatest(b, a % b);
  };
  const least = (a, b) => (a * b) / greatest(a, b);
  return [greatest(n, m), least(n, m)];
}

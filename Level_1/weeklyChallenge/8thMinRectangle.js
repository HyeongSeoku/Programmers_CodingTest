/*
문제 이름 : 위클리 챌린지 8주차_최소직사각형
링크 : https://programmers.co.kr/learn/courses/30/lessons/86491?language=javascript
 */

//첫 번째 풀이
function minRectangle() {
  var width = [];
  var height = [];

  sizes.map((item) => {
    if (item[0] < item[1]) {
      width.push(item[0]);
      height.push(item[1]);
    } else {
      width.push(item[1]);
      height.push(item[0]);
    }
  });

  return Math.max(...width) * Math.max(...height);
}

//다른 풀이
//====forEach 사용======
function minReactangle_forEach(sizes) {
  let w = 0;
  let h = 0;
  sizes.forEach((s) => {
    const [a, b] = s.sort((a, b) => a - b);
    if (a > h) h = a;
    if (b > w) w = b;
  });

  return w * h;
}

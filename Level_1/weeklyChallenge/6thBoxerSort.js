/*
문제 이름 : 위클리 챌린지 6주차_복서 정렬하기
링크 : https://programmers.co.kr/learn/courses/30/lessons/85002?language=javascript
 */

//첫 번째 풀이
function boxerSort(weights, head2head) {
  const data = [];
  weights.map((item, i) => {
    //데이터 생성부
    let heavyWinCnt = 0;
    let winCnt = 0;
    let totalGame = 0;
    const log = head2head[i].split("");
    log.map((result, j) => {
      if (result !== "N") {
        totalGame++;
        if (result === "W") {
          //if (i < j) { //이부분 오류 (i<j 로 할시 몸무게 같은 경우를 못 걸러줌)
          if (weights[i] < weights[j]) {
            heavyWinCnt++;
          }
          winCnt++;
        }
      }
    });
    const winningRate = totalGame ? winCnt / totalGame : 0;
    data.push({
      //현재 선수의 데이터 생성하여 배열에 push
      idx: i,
      weight: item,
      heavyWinCnt,
      winningRate,
    });
  });

  data.sort((a, b) => {
    //정렬 (승률과,자신보다 무거운 복서를 이긴 횟수,자기 몸무게 는 내림차순 정렬)
    if (a.winningRate !== b.winningRate) {
      return -(a.winningRate - b.winningRate);
    } else if (a.heavyWinCnt !== b.heavyWinCnt) {
      return -(a.heavyWinCnt - b.heavyWinCnt);
    } else if (a.weight !== b.weight) {
      return -(a.weight - b.weight);
    } else {
      return a.idx - b.idx;
    }
  });

  return data.reduce((ans, d) => {
    // 각 인덱스 값을 +1 하여 반환
    ans.push(d.idx + 1);
    return ans;
  }, []);
}

//다른 풀이

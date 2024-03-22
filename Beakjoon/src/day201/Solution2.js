const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");

const [N,M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number)


function Solution() {
  let result = 0;
    // const arr = line.split(" ").map(Number);

    let positive = []; // 양수에 위치하는 책들
    let negative = []; // 음수에 위치하는 책들

    // 1. 양수, 음수 배열을 따로 나누고, 절댓값으로 치환.
    arr.forEach((n) => {
      if (n > 0) {
        positive.push(n);
      } else {
        negative.push(Math.abs(n));
      }
    });

    // 1. 내림차순 정렬
    positive.sort((a, b) => b - a);
    negative.sort((a, b) => b - a);
    // 2. 양수의 배열과 음수의 배열 더 큰 수가 존재하는 배열은 
    // 가장 큰 수를 정답에 더해주고, M개의 수 만큼 제거.
    if (positive.length === 0 || positive[0] < negative[0]) {
      result += negative[0];
      negative = negative.slice(M);
    } else {
      result += positive[0];
      positive = positive.slice(M);
    }
    
    // 3. M개의 책씩 제자리에 두고, 가장 먼 위치의 거리(왕복)만큼
    // 정답에 더하여줍니다.
    let index = 0;
    while (index < negative.length) {
      result += negative[index] * 2;
      index += M;
    }
    index = 0;
    while (index < positive.length) {
      result += positive[index] * 2;
      index += M;
    }
    console.log(result);
}

Solution();
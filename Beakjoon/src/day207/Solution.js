/**
 * 각 범위를 돌며 8x8 배열을 탐색하는 문제입니다.
 * 처음 칸이 검은칸 또는 흰칸인 경우로 나뉘어 탐색을 진행하며,
 * 모든 경우의 수 중에서 칠해야하는 최소 정사각형의 갯수를 구하는 문제입니다.
 */
let ret = Number.MAX_VALUE;
const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const [N,M] = input[0].split(" ").map(Number);
const arr = input.slice(1).map(v => v.split(""));

function go(x, y, start) {
  let tmp = start;
  let cnt = 0;
  for(let i=x;i<x+8;i++) {
    for(let j=y;j<y+8;j++) {
      if(i > x && j == y) tmp = tmp==='W' ? 'B' : 'W'
      if(arr[i][j] != tmp) cnt+=1;
      tmp = tmp==='W' ? 'B' : 'W';
    }
  }
  ret = Math.min(cnt, ret);
}

function Solution() {
  for(let i=0;i<=N-8;i++) {
    for(let j=0;j<=M-8;j++) {
      go(i, j,'W');
      go(i,j,'B');
    }
  }
  console.log(ret);
}

Solution();

/**
 * 각 케이스마다 심어져 있는 위치를 반복문을 돌며 DFS를 진행하는 문제입니다.
 * 완탐으로 진행할경우 10억번이 넘는 연산이 필요하므로, 시간복잡도가 O(NlogN)인 DFS를 정했습니다.
 */
const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const T = parseInt(input[0]);
let arr = Array.from({length: 50},() => new Array(50).fill(0));
let visited = Array.from({length: 50},()=> new Array(50).fill(0));
const move = [[0,1],[0,-1],[1,0],[-1,0]];
let idx = 1;

function go(i,j, N, M) {
  visited[i][j] = 1;
  move.forEach((item) => {
    const [mx, my] = item;
    const nx = i+mx, ny = j+my;
    // console.log(i,j)
    if(nx >= 0 && ny >= 0 && nx <M && ny<N) {
      // console.log(i,j,nx, ny);
      if(arr[nx][ny] && !visited[nx][ny]) {
        go(nx, ny,N,M);
      }
    }
  });
  return;
}

function Solution() {
  const ret = [];
  for(let tc = 0; tc<T; tc++) {
    let cnt = 0;
    const [N, M, K] = input[idx++].split(" ").map(Number);
    arr =  Array.from({length: M},() => new Array(N).fill(0));
    visited = Array.from({length: M},() => new Array(N).fill(0));
    const range = idx+K
    while(idx < range) {
      const [x, y] = input[idx++].split(" ").map(Number);
      arr[y][x] = 1;
    }
    console.log(arr);
    for(let i=0;i<M;i++) {
      for(let j=0;j<N;j++) {
        if(arr[i][j] && !visited[i][j]) {
          // console.log('start',i,j);
          go(i, j, N, M);
          cnt++;
        }
      }
    }

    ret.push(cnt);
  }

  console.log(ret.join("\n"));
}

Solution();
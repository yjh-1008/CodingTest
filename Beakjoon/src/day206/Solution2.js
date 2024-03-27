/**
 * 각 재료가 최소의 비율을 갖는 문제입니다.
 * dfs로 각 자릿수마다 곱셈.
 * 비율이 최소인지 검사.
 */

const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const [N,M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let ret = 0;
function go(idx, sum, cnt) {
  if(sum > M) return;
  if(cnt === 3) {
    ret = Math.max(ret,sum )
    return;
  }
  if(idx === N) return;
  // console.log('here')
  go(idx+1, sum+arr[idx], cnt+1);
  go(idx+1, sum, cnt);

  // return;
}

function Solution() {
  for(let i=0;i<N;i++) {
    go(i+1, arr[i], 1)
  }
  console.log(ret);
}

Solution();
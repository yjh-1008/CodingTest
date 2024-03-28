/**
 * 1. 최소한의 팀으로 모든 문제를 풀고싶다. => DFS?
 * 2. 각 학생들의 수, 문제들의 수를 배열로 만들고 각 학생이 풀 수 있는 문제를 체크한다.
 */
const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const [N,M] = input.shift().split(" ").map(Number);
const arr = Array.from({length:M},() => new Array(N).fill(false));
let ret =Infinity;

function go(cur, solved, sc, pc) {
  if(pc ==N) {
    ret = Math.min(ret, sc);
    return;
  }
  // console.log(pc);
  if(sc == M) {
    return;
  }

  for(let i=cur;i<M;i++) {
    let tmpCnt = pc;
    let tmp = [...solved];
    for(let j=0;j<N;j++){
      if(!arr[i][j]) {
        continue;
      }else {
        if(!tmp[j]) {
          tmp[j] = true;
          tmpCnt+= 1;
        }
      }
    }
    go(i+1, tmp, sc+1, tmpCnt);
    go(i+1, solved, sc, pc);
  }
}

function Solution() {
  for(let i=0;i<input.length;i++) {
    input[i].split(" ").map(Number).forEach((v) => {
      arr[i][v-1] = true;
    })
  };
  go(0, new Array(N).fill(false),0, 0);
  console.log(`${ret === Infinity ? -1 :ret}`);
}

Solution();
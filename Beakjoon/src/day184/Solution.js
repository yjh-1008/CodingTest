const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const N = parseInt(input[0]);
const cities = [...input[1].split(" ").map(Number)];
const map = [];
for(let i=2;i<input.length;i++) {
  const tmp = input[i].split(" ").map(v => parseInt(v)-1);
  map.push(tmp.slice(1, tmp.length));
}
function dfs(idx, visited, com, value) {
  visited[idx] = 1;
  let sum = cities[idx];
  for(const n of map[idx]) {
    if(com[n] !== value) continue;
    if(visited[n]) continue;
    sum += dfs(n, visited, com, value);
  }
  return sum;
}

function Solution() {
  const max = cities.reduce((sum, v) => sum += v, 0);
  let ret =Number.MAX_VALUE;
  const visited = new Array(N+1).fill(0);
  const com = new Array(N+1).fill(0);
  //비트가 1인 경우, 0인경우를 선거가구가 나눠진 경우라고 판단.
  for(let i =1 ; i<(1<<N)-1 ;i++) {
    let idx1=0, idx2=0;
    visited.fill(0);
    com.fill(0);
    for(let j=0;j<N;j++) {
      if(i & (1<<j)) {
        idx1 = j;
        com[j] = 1;
      } else {
        idx2 = j;
      }
    }
    const sum1 = dfs(idx1, visited, com, 1);
    const sum2 = dfs(idx2, visited, com, 0);

    if((sum1 + sum2) == max){
      console.log(sum1, sum2);
      ret = Math.min(ret, Math.abs(sum1 - sum2));
    }
  }
  console.log(ret === Number.MAX_VALUE ? -1 : ret);
}

Solution();
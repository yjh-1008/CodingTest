const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const N = +input.shift()
const vals = input.shift().split(' ').map(Number);
const bridge = Array.from({ length: N}, () => []);
let arr = [...input];
arr = arr = arr.map(v => v.split(' ').map(Number))
let com = new Array(N).fill(0)
let visited= new Array(N).fill(0)
let ret = Number.MAX_VALUE;

function dfs (index, value) {
  visited[index] = 1;
  let sum = vals[index];
  for (let i of bridge[index]) {
      if (com[i] !== value) continue;
      if (visited[i]) continue;
      population = dfs(i, value);
      sum += population;
  }
  return sum;
}

function Solution() {
  const total = vals.reduce((acc, cur) => acc + cur, 0);
  for (let i = 0; i < N; i ++) {
    bridge[i] = arr[i].slice(1).map(v => v - 1);
}
  // console.log(bridge);
  for(let i=1; i< (1<<N) -1;i++) {
    
     com.fill(0)
     visited.fill(0)
     let idx1= -1, idx2=-1;
     for (let j = 0; j < N; j ++) {
      if (i & (1 << j)) {
          idx1= j;
          com[j] = 1;
      } else {
          idx2= j;
      }
  }
     let com1= dfs(idx1, 1);
     let com2 = dfs(idx2, 0);
     if(com1 + com2 === total){
      ret = Math.min(ret, Math.abs(com1 - com2));
     }
  }
  console.log(ret === Number.MAX_VALUE? -1 : ret);
} 


Solution();
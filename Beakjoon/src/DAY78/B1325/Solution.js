const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');

const [N,M] = input.shift().split(' ').map(Number);
const map = Array.from(new Array(N+1),()=> []);
let visited = Array.from(new Array(N+1).fill(0));
let cnt;
function dfs(s) {
  for(let i=0;i<map[s].length;i++) {
    if(visited[map[s][i]]) continue;
    cnt++;
    visited[map[s][i]]=1;
    dfs(map[s][i]);
  }
  return;
}

function Solution() {
  for(let i=0;i<M;i++) {
    const [a,b] = input[i].split(' ').map(Number);
    map[b].push(a);
  }

  let ret =0,retArr=[];
  for(let i=1;i<=N;i++) {
    cnt=0;
    visited = Array.from(new Array(N+1).fill(0));
    visited[i] = 1;
    dfs(i);
    if(ret < cnt) {
      retArr = [];
      retArr.push(i);
      ret = cnt;
    } else if(ret === cnt) {
      retArr.push(i);
    }
  }
  
  return retArr;
}

console.log(Solution().join(' '));

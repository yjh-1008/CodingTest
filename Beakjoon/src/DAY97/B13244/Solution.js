const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const N = parseInt(input.shift());
let arr;
let visited;
function dfs(here) {
  // console.log(arr[here])
  arr[here].forEach((data)=> {
    // console.log(data)
    if(!visited[data]) {
      visited[data] = 1;
      dfs(data)
    }
  })
  return;
}

function Solution() {
  let cnt;
  let ret = []
  for(let i=0;i<N;i++) {
    const M = parseInt(input.shift());
    arr = []
    visited = new Array(M+1).fill(0)
    for( let j=0;j<=M;j++) {
      arr.push([]);
    }
    cnt = 0;
    const K = parseInt(input.shift());
    for(let j=0;j<K;j++) {
      const [s, e] = input.shift().split(' ').map(Number);
       arr[s].push(e);
       arr[e].push(s);
    }
   

    for(let i=1;i<=M;i++ ) {
      if(!visited[i]) {
        visited[i] = 1
        dfs(i);
        cnt++;
      }
    }
    if(M-1=== K && cnt === 1) {
      ret.push("tree")
    }else ret.push("graph");
  }
  console.log(ret.join('\n'))
}

Solution()
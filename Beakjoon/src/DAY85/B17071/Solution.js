const fs = require('fs');
let [N, K] = fs.readFileSync('./index.txt').toString().trim().split(' ').map(Number);

const visited = new Array(500005).fill(0);

function Solution() {
  let cnt = 0;
  if(K === 500000 && N < K) {
    return -1;
  }
  while(K<500000) {
    visited[K+1] = cnt++;
    K += cnt;
  }
  cnt = 0;
  let q = [];
  q.push([N,0]);
  console.log(visited)
  while(q.length) {
    let [tmp,mc] = q.shift();
    let mx = [-1,1,tmp];
    for(let i=0;i<3;i++) {
      let nx = tmp + mx[i];
      if(nx < 0 || nx>500000) continue;
      if(visited[nx] === mc+1) {
        console.log(tmp)
        return mc+1
      }
      if(visited[nx]) continue;
      q.push([nx,mc+1]);
    }
  }
  return -1;
}

console.log(Solution())
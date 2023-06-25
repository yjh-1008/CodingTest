const fs = require('fs');
const [N, K] = fs.readFileSync('./index.txt').toString().trim().split(' ').map(Number)


const visited = new Array(100000).fill(Number.MAX_VALUE);
let time = Number.MAX_VALUE, cnt = 0;

function go(s) {

  const q = [];
  q.push(s);

  while(q.length) {
    const tmp = q.shift();
    if(tmp === K) {
      if(time > visited[tmp]) {
        time = visited[tmp];
        cnt = 1;
      }else if(time === visited[tmp]){
        cnt+=1;
      } 
      continue;
    }
    let mx = [-1,1,tmp];
    for(let i=0;i<3;i++) {
      let nx = tmp+mx[i];
      if(nx < 0 || nx > 100000) continue;
      if(visited[nx] < visited[tmp]+1) continue;
      if(time < visited[nx]) continue;
      visited[nx] = visited[tmp] +1;
      q.push(nx);
    }
  }
  return;
}


function Solution() {
  visited[N] = 0;
  go(N)
  return [time, cnt];
}

console.log(Solution().join('\n'));
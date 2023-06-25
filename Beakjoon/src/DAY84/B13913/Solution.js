const fs = require('fs');
const [N, K] = fs.readFileSync('./index.txt').toString().trim().split(' ').map(Number);
const visited = new Array(100000).fill(0);
const cnt = new Array(100000).fill("");

function go(s, arr) {
  const q = [];
  q.push(s);
  cnt[s]+=s
  while(q.length) {
    let tmp = q.shift();
    if(tmp === K) {
      return [visited[tmp]-1, cnt[tmp]];
    }
    for(const mx of [-1,1,tmp]) {
      let nx = tmp + mx;
      if(nx < 0 || nx > 100000) continue;
      if(visited[nx]) continue;
      q.push(nx);
      visited[nx] = visited[tmp]+1;
      cnt[nx] = cnt[tmp]+" "+nx;
    }
  }
  return;
}

function Solution() {
  visited[N]=1;
  let [a, b]=go(N,[]);
  console.log(a);
  console.log(b)
}

Solution()
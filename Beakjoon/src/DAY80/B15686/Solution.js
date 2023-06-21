const fs= require('fs');
const input= fs.readFileSync('./index.txt').toString().trim().split('\n');

const [N,M] = input[0].split(' ').map(Number);

let map = [],h=[],c=[];
let visited;
for(let i=1;i<=N;i++) {
  let r = input[i].split(' ').map(Number);
  for(let j=0;j<N;j++) {
    if(r[j] === 1) h.push([i-1,j]);
    else if(r[j] === 2) {
      c.push([i-1,j]);
    }
  }
  map.push(r);

}
let arr = [], ret = Number.MAX_VALUE;
function dfs(idx,cnt) {
  if(cnt === M) {
    let sum = 0;
    h.forEach(([hx, hy]) => {
      let min = Infinity;
      arr.forEach(([cx,cy]) => {
        min = Math.min(min, Math.abs(hx - cx) + Math.abs(hy - cy));

      });
      sum += min;
      
    });
    ret = Math.min(ret, sum);
    return;
  }

  for(let i=idx;i<c.length;i++) {
    if(visited[i]) continue;
    visited[i] = 1;
    arr.push(c[i]);
    cnt++;
    dfs(i,cnt);
    cnt--;
    visited[i] = 0;
    arr.pop();
  }
}


function Solution() {
  visited = new Array(c.length).fill(0);
  dfs(0,0)
}
Solution()
console.log(ret)
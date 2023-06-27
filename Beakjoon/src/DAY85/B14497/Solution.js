const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
let [N,M] = input.shift().split(' ').map(Number);
let [y1,x1,y2,x2] =input.shift().split(' ').map(Number);
let my = [1,-1,0,0], mx = [0,0,-1,1];
let map =[];
let visited= Array.from(new Array(N), ()=> new Array(M).fill(0));
for(let i=0;i<N;i++) {
  map.push(input[i].split(''))
}
function Solution() {
  let ret =1;
  const q=[],q2 = [];
  q.push([y1-1,x1-1]);
  visited[y1-1][x1-1] = 1;
  while(q.length) {
    const tmp = []
    
    while(q.length) {
      let [y, x] = q.shift();
      
      for(let i=0;i<4;i++) {
        let ny = y + my[i];
        let nx = x + mx[i];
        if(ny < 0 || nx < 0 || ny>=N || nx>=M) continue;
        if(visited[ny][nx]) continue;
        
        if(map[ny][nx] === '1') {
          visited[ny][nx] =1
          tmp.push([ny, nx]);
        } else if(map[ny][nx] === '0') {
          visited[ny][nx] = 1;
          q.push([ny,nx]);
          
        } else {
          return ret;
        }
      }
    }
    

    tmp.forEach((v) => {
      q.push([v[0],v[1]])
    })

    ret++;
  }
  return ret

}

console.log(Solution());

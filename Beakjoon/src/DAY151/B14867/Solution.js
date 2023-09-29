const fs = require('fs');
const [A, B, c,d] = fs.readFileSync('./index.txt').toString().trim().split(' ').map(Number);
const visited = {};
const q = [];
const len = 100005
function Solution() {
  visited[`${0},${0}`] = 1;
  q.push([0,0]);
  let idx = 0;
  const enqueue = (x, y, c) => { 
    if(typeof visited[`${x},${y}`] === 'number') return;
    visited[`${x},${y}`] = c+1;
    q.push([x,y]); 
  }

  while(q.length > idx) {
    const [a,b] = q[idx];
    enqueue(a, B, visited[`${a},${b}`]);
    enqueue(A, b, visited[`${a},${b}`]);
    enqueue(0, b, visited[`${a},${b}`]);
    enqueue(a, 0, visited[`${a},${b}`]);
    enqueue(Math.min(a+b, A), Math.max(0, a+b -A), visited[`${a},${b}`]);
    enqueue(Math.max(0, a+b-B), Math.min(a+b, B), visited[`${a},${b}`]);
    idx++;
  }
  console.log(typeof visited[`${c},${d}`] ==='undefined' ? -1 : visited[`${c},${d}`]-1);
}

Solution();
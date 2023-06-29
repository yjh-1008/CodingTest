
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  enqueue(value) {
    this.queue[this.rear++] = value;
  }
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front++];
    return value;
  }
  isEmpty() {
    return this.front == this.rear;
  }
}

const fs = require('fs');
let input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const [N,M] = input.shift().split(' ').map(Number);
let my =[1,-1,0,0], mx = [0,0,-1,1];

input = input.map((v) => [...v])

function go(waterQueue, liver) {
  const next = new Queue();
  while (!waterQueue.isEmpty()) {
    const [x, y] = waterQueue.dequeue();
    for (let i = 0; i < 4; i++) {
      const nx = x + mx[i];
      const ny = y + my[i];
      if (nx < 0 || ny < 0 || nx >=N || ny >= M) continue;
      if (liver[nx][ny] === "X") {
        liver[nx][ny] = ".";
        next.enqueue([nx, ny]);
      }
    }
  }
  return next;
}

function swan_move(duckQueue, liver, visited) {
  const next = new Queue();
  while (!duckQueue.isEmpty()) {
    const [x, y] = duckQueue.dequeue();
    for (let i = 0; i < 4; i++) {
      const nx = x + mx[i];
      const ny = y + my[i];

      if (nx < 0 || ny < 0 || nx >=N || ny >= M) continue;
      if (visited[nx][ny]) continue;
      if (liver[nx][ny] === ".") {
        visited[nx][ny] = true;
        duckQueue.enqueue([nx, ny]);
      } else if (liver[nx][ny] === "X") next.enqueue([x, y]);
      else if (liver[nx][ny] === "L") return true;
    }
  }
  return next;
}
function Solution(map) {
  let isFirst = false;
  let visited = Array.from(new Array(N), () => new Array(M).fill(false));
  let  q= new Queue(), q2= new Queue();
  for(let i=0;i<N;i++) {
    for(let j=0;j<M;j++) {
      if(map[i][j] === '.') {
        q.enqueue([i,j]);
      } else if(isFirst && map[i][j] === 'L') {
        q.enqueue([i,j]);
      } else if(!isFirst && map[i][j] === 'L') {
        isFirst = true;
        q.enqueue([i,j]);
        q2.enqueue([i,j]);
        map[i][j] = '.';
        visited[i][j] = true;
      }
    }
  }
  let ret = 1;

  while(true) {
    q2 = swan_move(q2, map, visited);
    if(q2===true) {
      console.log(ret-1);
      break;
    }
    q =  go(q, map, visited);
    ret++;
  }
}
Solution(input)
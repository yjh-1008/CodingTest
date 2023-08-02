const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const N = parseInt(input.shift());
const arr = Array.from(new Array(N), () => new Array(N).fill(0));
let M = parseInt(input.shift());
const offset = [[0, 1], [1, 0], [0, -1], [-1, 0]];
for(let i=0;i<M;i++) {
  const [x, y] = input.shift().split(' ').map(Number);
  arr[x-1][y-1] = 2;
}
M = parseInt(input.shift());
const rotations = input.reduce((acc, v) => {
    const [time, direction] = v.split(' ');
    acc[time] = direction === 'L' ? -1 : 1;
    return acc;
  }, {});
function Solution() {
  console.log(arr)
  arr[0][0] = 1;
  let ret=0;
  let dir = 0;
  const s = [[0,0]];
  let tail = 0;
  while(true) {
    ret++;
    const [x, y] = s[s.length-1];
   
    const [mx, my] = offset[dir];
    let nx = x+mx;
    let ny = y+my; 

    if(nx >= N || ny >= N || nx <0 || ny < 0) {
      break;
    }

    if(arr[nx][ny] === 1){
      break;
    }

    if(!arr[nx][ny]) {
      const [tx, ty] = s[tail];
      arr[tx][ty]  =0;
      tail++;
    }
    s.push([nx, ny]);
    arr[nx][ny]  =1;
    dir = (dir + 4 + (rotations[ret] ?? 0)) % 4;
    
  }
  console.log(ret);
}


Solution();
